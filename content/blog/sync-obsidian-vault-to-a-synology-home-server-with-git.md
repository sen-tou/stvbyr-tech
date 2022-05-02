---
title: "Sync Obsidian Vault to a Synology Home Server With Git"
summary: "In this post I show you how you can make your Synology a git repository than can sync your Obsidian Vaults."
date: 2022-04-03T19:30:17+02:00
translationKey: "sync-obsidian-vault-to-a-synology-home-server-with-git"
image: "images/sync-obsidian-vault-to-a-synology-home-server-with-git/cover.png"
social_image: "images/sync-obsidian-vault-to-a-synology-home-server-with-git/twitter.png"
categories: 
    - Obsidian.md
    - Synology
    - Git
---

In my previous post I showed you how you can 
[use multiple Obsidian config
folders and sync them with github]({{< ref
"/blog/use-multiple-Obsidian.md-config-folders-with-git.md" >}} "use multiple
Obsidian config folders and sync them with github").

While this is an easy way to manage your vault you may want to store and manage your data by yourself. And there are valid reasons for that.

This is a good solution if you wanna manage personal information that you don't feel like sharing on a public platform.

{{<toc />}}

## Goals

At the End of this post we will have the following setup:
- Sync our Obsidian vault automatically with the [Obsidian Git plugin](https://github.com/denolehov/Obsidian-git)
- Use a shared folder on the Synology that holds git repositories
- Login keyless so that the Obsidian plugin can be automated (also you can login with that user without inputting passwords)
- Use a non-admin user for security reasons (keyless auth is a security risk if not restricted properly)

## Prerequisites 

- Make a backup of your Synology (full backup)
- Basic knowledge in git
  - You don't need to know the ins and outs of git but I expect you to know what a .gitignore does, how to clone and how to use basic git commands
- Synology with DSM 7 installed (could work for DSM 6 but not tested)
  - Git-Server needs to be installed
  - Admin SSH access to the Synology
  - (optional) DDNS access so you can sync from anywhere
- Obsidian installed on at least one device
  - [Obsidian Git plugin](https://github.com/denolehov/Obsidian-git) installed 

## Steps

To reach our goals we need to configure the Synology and our client. We will start with the Synology.

### Synology

Login to the web interface of your Synology.

#### 1. Create a shared folder for git repositories

Navigate to `Control Panel > Shared Folders > Create`.

Choose a name and description for the folder and the location where you want the folder to live. I named mine `git-repos`

Skip Encryption.

Confirm Settings. 

Skip "Configure user permissions" for now. We come to that in the next step.

#### 2. Create a user that will be able to sync via ssh

Navigate to `Control Panel > User & Group > User > Create`.

Under "User Groups" choose the default "users" group. We don't want this user
to be in any group so that we can specify the rights manually.

Under "Permissions" check Read/Write for the created `git-repos` folder. All
other folders should not be accessible.

#### 3. Enable SSH Service

Navigate to `Control Panel > Terminal & SNMP`.

Check "Enable SSH service" and change the port to a non reserved port 
(for example 51289, this is optional but advised). 

This port is then always used to ssh into your Synology.

#### 4. Enable user to work with SSH

By default, Synology disables all ssh access to non-admin users. 
It even resets the login shell config periodically. So changes
to `/etc/passwd` will be reset.

I used [this blog post by Andi Dittrich](https://andidittrich.de/2016/03/howto-re-enable-scpssh-login-on-Synology-dsm-6-0-for-non-admin-users.html) to solve the problem. It's a little dated but still works for DSM 7.0.

In short: we need to use a scheduled task to periodically set the login shell
for our gituser.

Login to your Synology with the admin user.

```shell
ssh {adminuser}@{Synology} -p {port}
```

Create the scheduled script for your gituser.

```shell
cd /volume{X}/homes/{adminuser}
touch enable-ssh-login.sh && vi enable-ssh-login.sh
```

Press `i` to get into insert mode and paste the following content.
This script uses the `awk` command and sets the login shell
for our created gituser to `/bin/sh`.  

```shell
#!/bin/bash
/usr/bin/awk -i inplace -F: 'BEGIN{OFS=":"}/^gitworker\:/{gsub(/.*/,"/bin/sh",$7)}1' /etc/passwd
exit 0
```

Press `Esc` to go back to command mode to save & close with `:wq`.

Go back to the web backend and navigate to
`Control Panel > Task Scheduler > Create > Scheduled Task > User-defined script`

Under General: Enter a suitable task name. Choose your admin user as executor.

Under Schedule: Run on the following days "Daily". Frequency "Every 5 minutes".

Under Task Settings: Run commands > User-defined script `/volume{X}/homes/{adminuser}/enable-ssh-logins.sh`

#### 5. Configure SSH to work with keyless auth

Read this excellent [tutorial by Aaron Lenoir](https://blog.aaronlenoir.com/2018/05/06/ssh-into-Synology-nas-with-ssh-key/) if you want to know more. Essential parts are "Enable Public Key Authentication":

Login to your Synology with ssh. Use the admin user.

Open the sshd_config. 

**Be careful though as this file configures ssh and you can totally ruin your Synology if you change the wrong things. If you didn't make a backup do it definitely now!**

```shell
sudo vi /etc/ssh/sshd_config
```

Find the following lines and uncomment them (remove the `#`). This will enable public key authentication for your Synology.

```shell
#RSAAuthentication yes
#PubkeyAuthentication yes
```

Restart the ssh service (use systemctl as synoservicectl is not available anymore)

```shell
sudo systemctl reload sshd
```

### Client/Obsidian side

Start a terminal session on your client.
#### 1. Generate a keyless SSL Key-Pair for the client

```shell
ssh-keygen -t ed25519 -f ed25519_keyless
```

Make sure to leave password blank to enable keyless auth

#### 2. Add local public key to authorized_keys on your Synology

To authenticate and encrypt the connection to the Synology you have to add your
local keyless public key to your Synology.

Get the keyless public key (Linux, Mac)

```shell
cat ~/.ssh/ed25519_keyless.pub
```

On windows (powershell)

```powershell 
type ~\.ssh\ed25519_keyless.pub
```

The string should start with "ssh-ed25519". Copy the whole content. 

Login to your Synology with ssh. Use the admin user again.

Then open the `authorized_keys` file.

```shell
ssh {adminuser}@{Synology} -p {port}
sudo vi /volume{X}/homes/gitworker/.ssh/authorized_keys
```

Press `i` to get into edit mode.

Paste the public key. If you already have keys in there use a new line to paste the key. 

Press `Esc` to leave edit mode and save with `:wq`.

#### 3. SSH Login with gitworker

Logout and Login back in but now with the gitworker user

```shell
ssh gitworker@{Synology} -p {port}
```

If you completed all the previous tasks you should now be logged in without seeing a login prompt.

#### 4. Making your life easier (optional)

It is tedious to always input the username and the port. It would be nice if we could make the gitworker the standard login.

It turns out we can. Create a `config` file in the `.ssh` directory with the following content.

```txt
User gitworker
Port {port}
IdentityFile ~/.ssh/ed25519_keyless
```

This allows you to just `ssh {Synology}` and you're logged in!

You can still use other users, ports, etc. to log in if you specify them. The ssh binary will figure out what mechanism to use for login.

#### 5. Creating the repository

Now you can ssh as gitworker and create your Obsidian vault on the server. 

I am a bit lazy and don't want to copy paste everything, so use this tutorial for the [Synology Git Server](https://kb.Synology.com/en-global/DSM/help/Git/git?version=7) to create your repository and clone it to your client.

The repository has to be created within the new `git-repos` folder.

The clone command should look something like this:

```shell
git clone ssh://gitworker@{Synology}:{port}/volume{X}/git-repos/second-brain
```

The clone should work without a password. As well as all other git commands such as push or pull. This important because otherwise the obsidian plugin cannot be automated.

#### 6. Setting up sync with Obsidian Git

Follow my tutorial on how to [use multiple Obsidian config
folders and sync them with github]({{< ref
"/blog/use-multiple-Obsidian.md-config-folders-with-git.md" >}} "use multiple
Obsidian config folders and sync them with github").

The main difference between using github and your own repos is the setup of the git repository. Everything else is the same for both approaches.

You can skip the personal access token generation because we are already able to access our synology via ssh at this point.

In that tutorial we also setup multiple config folders so that you can use your vault on multiple devices with different configurations. If you don't want such a setup you can remove the `.obsidian` folder from the `.gitignore`.

## Conclusion

It's a little bit of work but now you can host your own Obsidian vault on your Synology.

Bonus: you're also able to host some git projects on your Synology now. The gitworker has access to the git-repos folder and can add more repositories if required.
