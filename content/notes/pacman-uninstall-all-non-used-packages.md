---
title: "Pacman Uninstall All Non Used Packages"
summary: ""
date: 2023-05-29T11:40:10Z
draft: false
translationKey: "pacman-uninstall-all-non-used-packages"
categories: 
    - Linux
    - Arch
    - Command Line
---

With this command you can grab all packages that are not referenced or
manually installed and uninstall them.

Source: <https://linuxhint.com/remove_package_dependencies_pacman_arch_linux/>

```bash
sudo pacman -Rs $(pacman -Qdtq)
```
