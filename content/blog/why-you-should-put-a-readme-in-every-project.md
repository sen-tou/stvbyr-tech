---
title: "Why You Should Put a Readme in Every Project"
summary: "You probably think: That's to much work, I don't do that. But hear me out. I will give you some good reasons why you should."
date: 2021-02-09T17:46:09+01:00
draft: true
translationKey: "why-you-should-put-a-readme-in-every-project"
image: "images/readme.jpeg"
author: Steve Beyer
categories: 
    - software development
    - organisation
    - productivity
---

I don't know a single developer that loves to write documentation. But in contrast I know a lot that scream when there isn't one.

I you want to write excellent software you have to be good documentation writer. You could have the best code on the earth but without docs you will have a hard time manintaining it, and others too. 

README to the rescue! But it's not hard to write documentation. All you need is a simple text file. Preferably Markdown and good structure.

What I don't want to talk in this article are comments and tests. There is a lot of discussion around whether to use comments at all, how much and when or whether or not test scripts function as documentation or not.

In this blog post I wanna focus on how READMEs can improve your life as a developer.

## What is a README?

In simple words: a README is just a file that holds information about your project. But what information? That depends on the project itself as I will show you.

You will often see that the filename of a README is written in capital letters to emphasize the meaning of the file. Your eyes will be drawn to it and it is probably the first file that you will look at.

On Github or Gitlab and probably other version control systems too, the README will be parsed and rendered as plain HTML to your browser. If you look at any repository on Github the text that is shown under the source files is actually the README.

Because the README is the first starting point of your project you should write *EVERYTHING* important regarding your project. But be precise here. This is not a some kind of book. Just mention the parts that are most important to you and your project.

A bad example would be to describe functionality of a framework that you are using. Those already have documentations that you should reference if you have to.

A good example would be to describe how *YOUR* code interacts with the third party framework. Make sure that you higlight the why and how so that you can reason about it.

Lets look at another example. If you expose an API that others can use than every endpoint, their responses and all common possible requests should be documented. You don't wanna leave room for interpretation.

This argument does not only apply to open source projects where strangers use your code. It also applies for companies that have multiple development teams. It might be that you develope a service that other teams can use. 

If you don't document that service how should they know what your service is able to do? Should they call you and ask for it? Obviously that is not a good idea. 

It would be nice if you showed some common screnarios of how to use your service. Some concrete examples that are easy to follow. So if someone wants to use your code they have a starting point that they can build upon.

All of the above sounds a little bit like you have to follow a set of rules. But that's far from true.

Creating a README is not a static process. *You* decide what's important to write down. A README is supposed to be a helping friend that you can always come back to. Not a list of things that don't matter just because someone said that you should include it in your README.

## You can comprehend decisions

As a software developer you are responsible for the details. You take a problem and break it down to simple consumable steps and implement them.

Most of the time you can use existing solutions. A Framework is just a collection of different common features that every appplication needs. (logging, database management, validation, etc.) You just have to use it and you're set to go. Most of them have excelent documentation as well.

But their will come times when you need to leave the default path and bend the system to your specification. 

I used the [form bundle](https://symfony.com/doc/current/forms.html) for symfony in one project. This bundles makes it very easy to build forms and map them to your database with validation built in. I had to add another layer of complexity in order to implement the specification of the customer. This extra layer is not something that you would usually do with this form module. 

At leat that's what I thought. I didn't have to bend the form module in the way that I did because the module had those feature build in. But I was not aware of them. I should have read the docs more carefully because then I would been aware of it. The feature was data transformers btw. So here is another tip: write good READMESs but also read carefully.

Anyways I wrote everything down. I described why I chose to implement it and how I used it in the project. Because of that documentation a colleague made me aware that there is in fact a native symfony implementation that could transform data. We refactored everything to use the native functionality.

The gist of this story is that documentation can help you and your team. It gives you insights about the ins and outs of a project. Because of documentation my colleague was able to spot the mistake and tell me about it.

It can also save you a lot of time. Every question that you answer in your README is a question that you don't have to answer in meetings or emails. Someone wants to know how a service in your projects works? Direct them to the documentation where everything is described.

Obviously that only applies to folks with a technical background. You can't just tell your customer or non-technical colleagues to read your README.

## Catching Ideas

Do you have an Idea for a new feature? Can you see areas of your project where you can make improvements? Can you do a refactoring?

Illuminating the future of your project is as important as keeping track of existing code. I often get lightning like inspirations that vanish as fast as they appeared. I made it a habit to write all of them down. Sometimes that is just a piece of paper but if it's an idea for your project you can just dump it into the README.

If you keep track of your ideas you also make it easy for others to contribute. They can just take on of those idea and develope it in a seperate branch and make a pull request.  

## Describing complex workflows

Lets look at another example. You have a contact form on a companies website that a customer is supposed to fill out.

The support team of that company receives those forms and processes them.

But there is more to that. Imagine you have to implement logic that sends those forms to different appartments based on the contents of the form.

And then you add a newsletter subscribtion to the form. Etc. etc. etc... You could add more "features" to this simple form if you want. I'm sure you immediatly can think of one more feature.

Now lets imagine you applied for a position at that company and you are in charge of maintaining the forms logic.

And there is no documentation. Maybe not even tests. (I know I didn't want to talk about that)

It's hell! What would you do now?

With a simple README in the project you would be able to get a quick overview on how the forms logic actually works.

## You can use Markdown

Markdown is propably the most used formatting language on the internet today. A lot of companies use it. You can edit your twitch profile with markdown for example. 

The reason for this is that you can pick up markdown in no time. You just need a simple text editor and a markdown cheat sheet to get used to the syntax.

You can do almost all things that you would do with HTML. Tables, Lists, Heading, Bold, Italic and many more. It's so powerful that even CMS Systems use markdown instead of wysiwyg-editors.

I said almost because it depends of the kind of renderer that you use. Some don't support the full range of markdown.  

In order to parse markdown you need a tool that parses it. A lot of editors and IDEs include markdown support by default now. So you can render your markdown directly in the editor. 

But you don't necessarily need to render it. Markdown is still a text format. You can just open it up and start reading.

Bonus: You can even export Markdown files as PDFs. So if you wanna send your README to someone that shouldn't be able to edit it you can export it as PDF and send it via email.
