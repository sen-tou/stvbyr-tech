---
title: "Use Multiple Obsidian.md Config Folders And Sync With Github"
date: 2022-01-07T13:29:04+01:00
draft: false
summary: "If you are using Obsidian on more than one devices, using multiple config folders can be quiet beneficial."
translationKey: "use-multiple-obsidian-md-config-folders-and-sync-with-github"
image: "images/use-multiple-obsidian-config-folders.png"
categories: 
    - Obsidian.md
    - Productivity
---

[Obsidian](https://obsidian.md/) is a great tool for collecting knowledge and connecting ideas together. I use it on many devices.

However, I do not use the same configurations or plugins on all devices. Simply because some plugins just don't work on all devices. I would have to configure the app over and over again for every device that I use.

A simple way to manage these is by using a Github repository (either public or private).

The following guide was made on a desktop device. For IPhone users the workflow is a bit different. You can use this guide "[{Mobile} Setting up iOS git-based syncing with mobile app (using Working Copy)](https://forum.obsidian.md/t/mobile-setting-up-ios-git-based-syncing-with-mobile-app-using-working-copy/16499)" to make it work. I could not test any android phones but I assume you can do something similar maybe with a different git client.

## The Git Repository

If you haven't created a Github repository yet, do that now. I called mine 'second-brain'. You can create it as private repository if you don't want others to read it.

Make sure your device is able to access your Github repository and has a [personal access token](https://docs.Github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) setup.
 
### .gitignore

This is the `.gitignore` file that we will be using. It excludes the trash folder from Obsidian and the `.obsidian` config folder.

We exclude the last one because Obsidian auto generates it for any vault. But since we will be using a specific config folder we don't need the default folder. 

Create that file and check it in.

```markdown
.trash/
.DS_Store
.obsidian
```

## Configure Obsidian Git

To sync the repository we will be using a Obsidian.md plugin called [Obsidian Git](https://Github.com/denolehov/obsidian-git). This plugin integrates and automates syncing with Github. Make sure to install it and enable it. Again, it will only work if you have setup your personal access token for Github.

Make sure to clone the new repository. Open the folder with Obsidian.md via `Open folder as vault`. Now you should see a default Obsidian installation. Browse to `⚙️ > Community Plugin > Browse` and install Obsidian Git.

{{<img src="images/d84c14ff7b64e494538c81ca734e41b27cdf8fbb2042dff4668c31ac1e6e2562.png" caption="Search for Obsidian Git plugin">}}

Under settings `⚙️ > Obsidian Git` you can fine tune the plugin. Set a positive value to `Vault backup interval` and `Auto pull interval` to automate git. Scroll through and make adjustments if needed. Though the default settings are great for most uses.

{{<img src="images/b81bdc677e128184b4d7501dfe3d1c8c17efe48eca318bba8a0e0931061d2753.png" caption="Configure Obsidian Git">}}

Make sure that the plugin works. Create some notes and either wait for the automation to happen or use the git UI within obsidian.

{{<img src="images/3ea4e8c2173e09ba2e3576c6869725c74c143846307e2d4c11d4c5d73b3b2b55.png" caption="Obsidian Git UI Integration">}}
## The Config Folders

Right know I have multiple laptops, a PC and an IPhone where Obsidian is installed. It would be a hassle to sync them by hand. 

Some plugins are not available on the IPhone, so I can't use the standard `.obsidian` folder as all configurations and plugins will be managed in this place.

The solution for this problem is to use different config folders for these devices.

I use two config folders:
- `.obsidian.desktop` (config for all laptops and PCs)
- `.obsidian.mobile` (config for my IPhone)

The naming is of course is up to you. You could also make folders for different OSs, e.g.: `.obsidian.linux`, `.obsidian.mac`.

## Switching The Config Folders

Under settings `⚙️ > About > Override config folder` you can now define which folder to use. If you're on a laptop or PC right now, use `.obsidian.desktop`. Type that into the text box.

{{<img src="images/1a28afc702ef4442c69aedba219e1c0332b4fd4a7c836fbfa2673a86817b7b2a.png" caption="Switching  the config folder">}}

Relaunch the app now. You now should be using the new config folder. To check if you're using the new config folder go back to the settings and see if the input field contains your new config folder. 

The cool thing is: The config folder that you now specified is checked into the git repository. This ensures that all configurations get backed up for this device. This also happens with any `.obsidian.*` folder for other devices. Just the default `.obsidian` folder will be ignored.

## Adding A New Device

If you want to add a device to use obsidian you just need to clone your repository to that device and repeat the steps that I described above.

## Migrating existing .obsidian config folders

If you already have a configured Obsidian instance you can just copy the `.obsidian` folder and rename it to your liking. After that you just change the config folder in the settings.

## Troubleshooting

Sometimes you will have random merge conflicts. These happen because sometimes obsidian changes the workspace files. For example when you zoom in the graph view. If you just started the app you can safley `git reset --hard origin/head`. This resets the vault to the current github state. After that your changes get backed up again.
 
## Conclusion

There you have it. An easy way to manage your Obsidian.md vault on multiple devices using just one Github repository.

