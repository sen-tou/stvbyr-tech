---
title: "How to Override the Template of a List Page in Hugo"
summary: "The default template that hugo uses to render lists is `layouts/_default/list.html`"
date: 2021-04-29T13:46:47+01:00
draft: false
translationKey: "how-to-override-the-template-of-a-list-page-in-hugo"
categories: 
    - hugo
---

The default template that hugo uses to render lists is `layouts/_default/list.html`. 

Supposably you have a content folder `content/notes` but want to use a different list template for those notes you just need to add a folder to layouts called notes and add a list.html to it. So you endup with `layouts/notes/list.html`

That's it. Now you have a different list template. For more information about list templates see the Hugo Documentation for [lists](https://gohugo.io/templates/lists/) and [lookup order](https://gohugo.io/templates/lookup-order/).
