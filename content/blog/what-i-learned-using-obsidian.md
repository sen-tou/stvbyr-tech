---
title: "What I Learned Using Obsidian"
summary: "My thoughts on what I learned using Obsidian for a while."
date: 2022-11-16T13:14:18Z
draft: false
translationKey: "what-i-learned-using-obsidian"
categories: 
    - Obsidian.md
---

I use obsidian for a while now and I have learned some things along the way.
Most of these things made sense over time as I got more inspiration from others
as well as my own experience with obsidian.

My vault is not the biggest. Right now I manage around 300 notes. Some people
have thousands of notes. Things like search do not play a big role for my vault.
I say this because it could be that my experiences don't apply to vault with
lots more notes than I have.

## To much concrete Information

I put to much concrete information into my vault. What I meant by that is
knowledge that you will find during research. Basically raw information. I put
it in without much thought. I was just collecting ideas/concepts I deemed useful for a topic.

I think it's important to know why you research
something, what you expect from that data and why you take notes about it.

For me I use obsidian more like a index where I can go to and read about
something that I researched in the past. I want to know what I figured out and
where to find material that has further information about it should I be interested
in reading it again.

This is a huge help for me as I am a neurodivergent person. It is easier to keep
track of knowledge outside of my brain.

However I am not a researcher and I am not collecting knowledge to process it
further into papers or other scientific writings. I guess this would involve a
lot more written word.

This is why collecting huge chunks of information doesn't make sense for me.
It's the simple fact that I don't process it with the care a researcher would.

And thats the difference. I don't want to collect concrete knowledge. I want to
collect conclusions of topics I am interested in. Short sentences, short bullet
points. Everything else I can link to a source where I can read about if I want
to. In essence: I don't need to know everything just where to find it.

You have to assess what you want out of your vault and decide what to put into
it and what to rather link.

## The graph does not need to be "pretty"

I go out on a limb when I say that most of us want a perfect looking,
symmetrical graph. When you look on reddit there are a lot of people who share
their beautiful looking graphs. It's just so nice to look at.

However you can only achieve this when you have system layed out that follows
strict rules. Otherwise you end up with something like this.

{{<img
    src="images/what-i-learned-about-obsidian/graph.png"
    caption="Obsidian non structured graph"
>}}

This is the curated graph that I use for my programming related notes. There is
not a lot of structure in there. I have assigned some colors to the notes to
differentiate them and thats it.

The links however don't seem to follow a strict pattern. Some notes don't even have
connections yet. I link them the way it makes sense to me for one specific
topic.

This leads to a graph that is not "beautiful" because links are not made for
aesthetic reasons but rather logical ones.

This had influence in the way I use the graph now. A helpful application is
spotting notes without connection and deciding where they could fit. When you
have multiple topics it also interesting to see where they have cross
references to other topics.

## A little bit of structure is necessary

I said that I don't have a lot of structure in my vault. That doesn't meant that
I don't have any structure.

I created a little document inside my vault where I define some rules on how I
want to use the vault. This document contains things like:

- taxonomy (How are things called?)
- philosophy (Which principals to I want to follow during note taking?)
- structure and processes (How does the file/folder/link/tag structure look like?)
- categorization (How to categorize notes?)
- automation (What can I automate and how?)

These points don't have to be complicated. Let's give two examples on how these
can look like.

### Example 1: Philosophy

This is what I wrote under "Philosophy":

> These are the guidelines that I will follow
>
> - It should be obvious
> - It should be easy
> - It should be automated
>
> Lets explain.
>
> It should be obvious what to do, how to do it and where to put it. I don't want
> to think about my system after I set it up. I want to work with it and don't
> want to think about where to put notes, when to create a task and so on. That
> doesn't mean it is static. It can evolve if necessary.
>
> It should be easy to use the system and create things. It also should be easy to
> process notes and have a clear separation between what is what. Is it done, is
> it relevant, is it important.
>
> It should be automated as much as possible. Note taking is a creative process
> and I want to focus on that while using the system. I don't want to micromanage.
> Syncing the vault for example should happen automatically without me doing
> anything.

This basically dictates how I want my vault to work on a meta level. The
automation part is in my opinion the most important one. I am distracted pretty
easily. Having less distraction and focusing on the note taking boost the the
quality of the content I put in.

### Example 2: Note processing workflow

Let's look at another bit: The workflow I am using.

{{<img
    src="images/what-i-learned-about-obsidian/note-processing-workflow.excalidraw.png"
    caption="Note processing workflow I use (flow chart)"
>}}

This is a flow chart of the process I am using to process notes that I put into
the system. It's simple and work perfectly for my applications.

One more thing to say about this document is that it is always work in progress.
Its not a bill that I enforce but rather a guide I follow. It's good to question
your system from time to time and make changes when necessary.

You don't have to write a document like I did but you should think a little
about the structure and the way you want to use your vault.

## You don't have to use a note taking method, adapt it

Note taking methods like Zettelkasten are pretty popular because they all bring
structure and confidence into the system. They work because others proved that
they work.

If you are new to note taking it might be a good idea to research what methods
are out there. Reading about these gives you a broader horizon when
deciding how you want to take your notes.

This doesn't mean that you have to use all of these methods. It means that you
can pick the best cherries and create your own note taking system.

The best way to figure this out is to just try it out for yourself. There is
unfortunately no shortcut.

I for example figured out that the Zettelkasten method is not really the way I
want to go. After researching and trying I took big inspiration from this
{{< link
    target="_blank"
    text="guide by Bryan Jenks"
    href="https://www.youtube.com/watch?v=wB89lJs5A3s"
    rel="external"
>}}.

It is a pretty long video but has sections so you can jump around if you want. I
couldn't describe what is mentioned in this video as there is a lot of
information in there.

## Have fun and make it your own

When I first started with obsidian I wanted it to be perfect. I wanted a system
that would solve all my problems with keeping up with knowledge. I searched the
internet for a template that I could you just use. That didn't work.

The strength of obsidian is that you can make it your own. This can be done with
structure but also themes and plugins. This takes time but it's also fun to see
your system evolve over time.

No mather what feature you need there is probably a plugin for it in the
repository. One of my favorites is data view. With data view you can create your
own queries and aggregate data as you need.

For example I have "recent inbox" page that is a list of notes that got added
to the inbox recently. That the simple query:

```sql
table date(date) as created

from "Inbox"

sort date desc

limit 20
```

This generates a table from top down with note titles and creation date. This
way I have a great overview about the things I am interested right now.

Another thing is to take it easy. You don't have to use obsidian every day or
for everything if you don't want to. There can be a pressure to put everything
in there. Maybe because you feel you should document something or because you think that
obsidian can replace every other form of note taking that you use.

I definitely had this urge. It ended in me going through a lot of notes to delete
them because they didn't provide value to me.

At the end of the day I want to have fun with the system and let it be a tool
that is helpful to me.

## Conclusion

To summarize all of this: try to create a system that is tailored to you. If you
don't need a feature don't add it. If you are tired of a note taking method try
another one or create your own. When you have fun you are more productive.
