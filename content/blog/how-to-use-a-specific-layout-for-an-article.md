---
title: "How to Use a Specific Layout for an Article in Hugo"
date: 2021-03-18T06:04:38+01:00
translationKey: "how-to-use-a-specific-layout-for-an-article-in-hugo"
image: "home-header.png"
categories: 
    - hugo
---

Sometimes you just want to use a unqiue template for a post or list. In hugo there is a template [lookup order](https://gohugo.io/templates/lookup-order/) in which the template files are getting loaded but you can also specify the exact template that you want. The hugo docs explain how [content organization](https://gohugo.io/content-management/organization/) works.

## Using Frontmatter Layout

Single posts for example use the `layouts/_default/single.html` template by default to show a single content page. But if you want a specific template you can use frontmatter for that.

Consider the following structure: `content/about/index.md`. 

This would render the about page under `/about` using the default `layouts/_default/single.html` template. 

Now in the frontmatter of that post you can use `layout: "about"` for example. What this line tells hugo is that it should look into the `layouts/_default` folder and search for a `about.html` template.

This is an example from my about page. It uses the `layouts/_default/about.html` as template.

{{< highlight markdown "linenos=table" >}}
---
title: "About me"
draft: false
menu: 
    main:
        weight: 100
translationKey: "about"
layout: "about"
---
{{< / highlight >}}

## Using Frontmatter Type

Each content file/post gets a default content type assigned. Usually this is the name of the subfolder in `content` where the post lives in. So for example a `content/blog/php.md` would get the type `blog`.

There is a special case though. All files directly under `content` are of type `page` and also all index files (but *not* the ones with underscore) in subfolders are of type `page` as well. Keep that in mind when specifing a layout.

You can also specify the content type in frontmatter. This simply tells hugo which layouts subfolder it should use to load the templates from. For example `type: "notes"` would make hugo search in the `layouts/notes` folder.

Combining both `type` and `layout` you can precisely define what template to use. The template path for this example is: `layouts/special/super.html`.

{{< highlight markdown "linenos=table" >}}
---
title: "Super special blog post"
draft: false
menu: 
    main:
        weight: 100
translationKey: "about"
type: "special"
layout: "super"
---
{{< / highlight >}}
