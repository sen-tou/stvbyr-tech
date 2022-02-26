---
title: "Sync Obsidian Vault to a Synology Home Server With Git"
summary: ""
date: 2022-02-26T13:14:17+01:00
draft: true
translationKey: "sync-obsidian-vault-to-a-synology-home-server-with-git"
image: "home-header.png"
categories: 
    - obsidian
    - synology
    - git
---

In my previous post I showed you how you can sync your obsidian vault with github and use it on multiple devices.

While this is an easy way to manage your vault you may want to store and manage your data by yourself. And there are valid reasons for this.

This is a good solution if you wanna manage personal information that you don't feel like sharing on a public platform.

## Goals

At the End of this tutorial we will have the following setup:
- Sync our obsidian vault automatically with the [Obsidian Git plugin](https://github.com/denolehov/obsidian-git)
- Use a shared folder on the synology that holds git repositories
- Use a non-admin user for security reasons (keyless auth is a security risk if not configured properly)
- Login keyless so that the Obsidian plugin can be automated (also you can login with that user without inputting passwords)

## Requisites 

- Backup of your synology (full backup)
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
