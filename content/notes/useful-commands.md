---
title: "Useful Commands"
summary: "A list of commands I have used and found useful to store for reference"
date: 2022-12-16T11:25:19Z
draft: false
translationKey: "useful-commands"
categories: 
    - Command Line
---

This is a list of useful commands I came accross at some point.

### Fix a bunch of cargo directories in one go

```bash
find . -type f -name "Cargo.toml" | xargs -I{} cargo fix --manifest-path="{}" --allow-dirty 
```
