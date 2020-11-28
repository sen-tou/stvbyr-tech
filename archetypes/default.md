---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
slug: "{{ with .Slug }}{{ . }}{{ else }}{{ .BaseFileName }}{{ end }}"
translationKey: "{{ .Name }}"
image: "home-header.png"
categories: 
    - php
---

