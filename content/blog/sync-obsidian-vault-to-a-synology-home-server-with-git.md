---
title: "Sync Obsidian Vault to a Synology Home Server With Git"
summary: ""
date: 2022-02-26T13:14:17+01:00
draft: true
translationKey: "sync-obsidian-vault-to-a-synology-home-server-with-git"
image: "home-header.png"
categories: 
    - Obsidian.md
    - Synology
    - Git
---

In my previous post I showed you how you can 
[use multiple obsidian config
folders and sync them with github]({{< ref
"/blog/use-multiple-obsidian.md-config-folders-with-git.md" >}} "use multiple
obsidian config folders and sync them with github").

While this is an easy way to manage your vault you may want to store and manage your data by yourself. And there are valid reasons for that.

This is a good solution if you wanna manage personal information that you don't feel like sharing on a public platform.

## Goals

At the End of this tutorial we will have the following setup:
- Sync our obsidian vault automatically with the [Obsidian Git plugin](https://github.com/denolehov/obsidian-git)
- Use a shared folder on the synology that holds git repositories
- Login keyless so that the Obsidian plugin can be automated (also you can login with that user without inputting passwords)
- Use a non-admin user for security reasons (keyless auth is a security risk if not configured properly)

## Requisites 

- Make a backup of your synology (full backup)
- Synology with DSM 7 installed (could work for DSM 6 but not tested)
  - Git-Server needs to be installed
  - Admin SSH access to the synology
  - (optional) DDNS access so you can sync from anywhere
- Obsidian installed on at least one device (I am assuming Desktop)
  - [Obsidian Git plugin](https://github.com/denolehov/obsidian-git) installed 

## Steps

To reach our goals we need to configure the Synology and our client. We will start with the Synology.

### Synology

Login to the webinterface of your synology.

#### 1. Create a shared folder for git repositories

Navigate to `Control Panel > Shared Folders > Create`.

Choose a name and description for the folder and the location where you want the folder to live. I named mine `git-repos`

{{<img src="images/sync-obsidian-vault-to-a-synology-home-server-with-git/Screenshot 2022-02-26 133408.png" caption="Create shared folder setup basic information">}}

Skip Encryption.

Confirm Settings. 

Skip "Configure user permissions" for now. We come to that in a bit.

#### 2. Create a user that will be able to sync via ssh

Navigate to `Control Panel > User & Group > User > Create`.

{{<img src="images/sync-obsidian-vault-to-a-synology-home-server-with-git/Screenshot 2022-02-26 134455.png" caption="Create git user that will be used to connect via ssh">}}

Under "User Groups" choose the default "users" group. We don't want this user
to be in any group so that we can specify the right manually.

Under "Permissions" check Read/Write for the created git-repos folder. All
other folders should not be accesible.

#### 3. Enable SSH Service (changing port advised)

Navigate to `Control Panel > Terminal & SNMP`.

Check "Enable SSH service" and change the port to a non reserved port 
(for example 51289)

This port is then always used to ssh into your synology.

#### 4. Enable user to work with SSH

By default, synology disables all ssh access to non-admin users. 
It even resets the login shell config periodically. So changes
to `/etc/passwd` will be reset.

I used [this blog post by Andi Dittrich](https://andidittrich.de/2016/03/howto-re-enable-scpssh-login-on-synology-dsm-6-0-for-non-admin-users.html) to solve the problem. It's a little dated but still works for DSM 7.0.

In short: we need to use a sheduled task to periodically set the login shell
for our gituser.

Login to your synology with the admin user.

```shell
ssh {adminuser}@{synology} -p {port}
cd /volume{X}/homes/{adminuser}
touch enable-ssh-login.sh && vi enable-ssh-login.sh
```

Press "i" to get into insert mode and paste the following content.
This is script uses the awk command and sets the login shell
for our created gituser to (/bin/sh).  

```shell
#!/bin/bash
/usr/bin/awk -i inplace -F: 'BEGIN{OFS=":"}/^gitworker\:/{gsub(/.*/,"/bin/sh",$7)}1' /etc/passwd
exit 0
```

Press "Esc" to go back to command mode to save & close with `:wq`.

Go back to the web backend and navigate to
`Control Panel > Task Scheduler > Create > Scheduled Task > User-defined script`

Under General: Enter a suitable task name. Choose your admin user as executor.

Under Schedule: Run on the following days "Daily". Frequency "Every 5 minutes".

Under Task Settings: Run commands > User-defined script `/volume{X}/homes/{adminuser}/enable-ssh-logins.sh`

#### 5. Configure SSH to work with keyless auth

Read this excellent [tutorial by Aaron Lenoir](https://blog.aaronlenoir.com/2018/05/06/ssh-into-synology-nas-with-ssh-key/) if you want to know more. Essential parts are "Enable Public Key Authentication":

Login to your synology with ssh. Use the admin user.

```shell
ssh {adminuser}@{synology} -p {port}
cd /volume{X}/homes/{adminuser}
touch enable-ssh-login.sh && vi enable-ssh-login.sh
```

Open the sshd_config. 

**Be careful though as this file configures ssh and you can totally ruin your synology if you change the wrong things. If you didn't make a backup do it definitly now!**

```shell
sudo vi /etc/ssh/sshd_config
```

Find the following lines and uncomment them (remove the `#`). This will enable public key authentication for your synology.

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

#### 2. Add local public key to authorized_keys

To authenticate and encrypt the connection to the synology you have to add your
local keyless public key to your synology.

Get the keyless public key (Linux, Mac)

```shell
cat ~/.ssh/ed25519_keyless.pub
```

On windows (powershell)

```powershell 
type ~\.ssh\config
```

The string should start with "ssh-ed25519". Copy the whole content. 

Login to your synology with ssh. Use the admin user again.

```shell
ssh {adminuser}@{synology} -p {port}
cd /volume{X}/homes/gitworker/.ssh
sudo vi authorized_keys
```

Press "i" to get into edit mode.

Paste the public key. If you already have keys in there use a new line to paste the key. 

Press "Esc" to leave edit mode and save with ":wq".

#### 3. Login with gitworker

Logout and Login back in but now with the gitworker user

```shell
ssh gitworker@{synology} -p {port}
```

If everything worked you should be logged in without seeing a login prompt

#### 4. Making your life easier

It is tedious to always input the username and the port. It would be nice if we could make the gitworker the standard login.

It turns out we can. Create a `config` file in the `.ssh` directory with the following content

```txt
User gitworker
Port {port}
IdentityFile ~/.ssh/ed25519_keyless
```

This allows you to just `ssh {synology}` and you're logged in!

You can still use other users to log in. The ssh binary will figure out what mechanism to use for login.

## Conclusion

It's a little bit of work but now you can host your own obsidian vault on your synology. 

Bonus: you're also able to host some git projects on your synology now. The gitworker has access to the git-repos folder and can add more repositories if required. 