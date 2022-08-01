---
title: "Mount Volumes with sshfs in Manjaro from Synology"
summary: "Sshfs is a great option if you want to connect to a remote file system securely"
date: 2022-07-31T19:36:02+02:00
draft: false
translationKey: "mount-volumes-with-sshfs-in-manjaro-from-synology"
image: "images/mount-volumes-with-sshfs-in-manjaro-from-synology/cover.png"
social_image: "images/mount-volumes-with-sshfs-in-manjaro-from-synology/twitter.png"
categories: 
    - Synology
    - Linux
---

Recently I decided to try manjaro on an old laptop that I may take with me while
traveling. So far I used a synology that I only set up in my LAN to access
the file system.

I used DDNS for quite some time to access it on the go. But that only worked
through DSM web UI so far. Now I want to be able to access it securely from
anywhere.  

While researching I stumbled upon `sshfs`. Which stands for SSH file system. It
basically lets you access your file system through the already existing ssh
config. No further overhead required.

Not gonna lie I had some struggles with it but got it working and want to share
this journey with you.

## What do I have at the end

My requirements for this were:

- Having encrypted transport from/to the file system
- Using a non root user to access the files
- Have the files mounted on boot
- I don't want to store any plaintext passwords somewhere

### Setting up the Synology

First we need to setup the synology.

I created a non root user and gave it only access to the folders I need to
access on the go. In the "Applications" tab it is important to allow "ftp" as well
as "sftp". I don't know why ftp is necessary but otherwise you will get an
error.

Under `Control Panel > Terminal & SNMP > Terminal` enable SSH and set a port (I highly recommend to do that as it adds more security for
little effort).

Under `Control Panel > File Services > FTP` enable SFTP and make sure to use the
same port as for ssh.

Under `Control Panel > Security > Firewall` make sure to allow the Encrypted
terminal service so that ssh and sftp are going through. FTP is not needed this time.

### Setting up the Client

Next I needed to install sshfs. Which is pretty simple.

```bash
pacman -Sy sshfs
```

Now, lets create an ssh key for the client.

You can refer to how to do this on my 
{{< link target="_blank" alt="Sync Obsidian Vault to a Synology Home Server With Git" text="other tutorial" ref="/blog/sync-obsidian-vault-to-a-synology-home-server-with-git.md#1-generate-a-keyless-ssl-key-pair-for-the-client" >}} on how to sync obsidian with
git. Important parts are 1. Generate a keyless SSL
key-pair for the client to 4. Making your life easier (optional).

In the mentioned article I wrote that you can use a key with password auth. But for `sshfs`
I didn't got that working. So what I did was to create two ssh keys. One with
password for using when ssh'ing into the synology and one keyless key that I use
for `sshfs`.

My ssh folder looks like the following:
```bash
.ssh/
  |_ id_ed25519
  |_ id_ed25519.pub
  |_ id_ed25519_keyless
  |_ id_ed25519_keyless.pub
```

Lets use `sshfs` to mount the volume.

I used the `sshfs` command to test some scenarios for myself but I skipped that
part here
because this is not topic of that post. I encourage you to tinker a little.

In order to mount a folder from my synology on boot I had to add it to
`/etc/fstab`. This was by far the "funniest" part as debugging this was a little
cumbersome. After a lot of attempts I came up with this config (There is no
linebreak by the way).

```txt
user@synology:/folder /mnt/folder sshfs identityfile=/home/localuser/.ssh/id_ed25519_keyless,idmap=user,uid=1000,gid=1000,port=65000,allow_other,_netdev 0 0
```

Okay, lets break it down.

1. The first option is the connection string. Important mount root is
   appareantly `/volume{x}` so you can just use `/folder` to specify the shared
   folder on the synology
2. The second part is the folder where we wanna mount it locally
3. The third one is the type of mount. This has had me quiet a bit. I first tried to
   use `fuse.sshfs` as this is what you find the most on the internet. But I had
   to use `sshfs`. As far as I understood, this type only works with systems
   that use `systemd`.
4. The forth one are the options. This is the most important part
   - `_netdev`: This lets the system know that we want to mount a volume that needs
   network access in order to be mounted. The system wait until it is
   established
   - `allow_other`: The mount is created by root so this options allows other
     users to access the mount as well
   - `idmap=user`, `uid` and `gid`: Most likely the user on your localhost is
     different from the remote on. These options make sure to map those two user
     so that the permissions for files are created correctly
   - `identityfile`: Here we specify the keyless ssh key that will be used to
     communicate with the synology (the pub key needs to added to
     `authorized_keys` as done in the tutorial)
5. The last two options are integers that control backup (first digit) that
   should apparently not used anymore and file system check (second digit) which
   controls the fsck behavior which is turned off.

With all that done we can now `sudo mount -a` to load the mount immediately.
If that worked you can try to restart your system now to see if it connects
properly. If not you have to tinker a little more, good luck 🙈.

Note: There is an option `delay_connect` that will delay mounting the volume as long as
don't request it. This will make it so that if you don't access your mount that the
connection will not be established.

## Closing

Hope this will help you. If you are someone with more knowledge about these
parts especially how to possibly use a ssh key with password than let me know.
