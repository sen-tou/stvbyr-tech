---
title: "How to Use a Specific Layout for an Article"
date: 2021-03-18T06:04:38+01:00
draft: true
translationKey: "how-to-use-a-specific-layout-for-an-article"
image: "home-header.png"
categories: 
    - hugo
---

Sometimes you just want to use unqiue template for a post or list. In hugo there is a template [lookup order](https://gohugo.io/templates/lookup-order/) in which the template files are getting loaded but you can also specify the exact template that you want. 

## Using Frontmatter Layout

Single posts for example use the `layouts/_default/single.html` by default. But if you want a specific template use frontmatter for that.

Consider the following structure: `content/about/index.md`. This would render the about page under /about using the default `single.html` template. Now in the frontmatter of that post you can use `layout: "about"`. What this line tells hugo is that it should look into the `layouts/_default` folder and search for a `about.html` template.

## Using Frontmatter Type

You can also specify a type in frontmatter. But here it gets a little tricky. 

Take the `content/about` content folder. The index.md functions as a special page. 

That means hugo also searches in a folder called `layouts/about`. This is the same principle I used for [overriding a list template]({{< ref "how-to-override-the-template-of-a-list-page-in-hugo.md" >}}). 

