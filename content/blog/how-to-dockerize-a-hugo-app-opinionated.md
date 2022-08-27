---
title: "How to Dockerize a Hugo App (opinionated)"
summary: "I show you how a simple hugo setup with docker can look like based on my own website."
date: 2022-08-27T14:33:51Z
draft: false
translationKey: "how-to-dockerize-a-hugo-app-opinionated"
image: "images/how-to-dockerize-a-hugo-app-opinionated/cover.jpg"
social_image: "images/how-to-dockerize-a-hugo-app-opinionated/cover.jpg"
categories: 
    - Hugo
    - Docker
---

stvbyr.tech uses {{< link target="_blank" text="hugo" href="https://gohugo.io/" rel="external">}} under the hood. You can find the source {{< link target="_blank" text="on github" href="https://github.com/stvbyr/stvbyr-tech" rel="external">}}.

The goal of making a dockerized hugo app is the fact that updating the dependencies (go, hugo, node) is cumbersome and you have to install all the tools on your system.

With docker we can produce reproducible builds which have the benefit of being portable and not clutter our environments with dependencies.

It is easy to switch the hugo version and see if it works or not. Switching back is just a matter of rebuilding the container.

The first question that you might have is: why not just use {{< link target="_blank" text="klakegg/docker-hugo" href="https://github.com/klakegg/docker-hugo" rel="external">}}?

The answer to that is: If you want a quick setup with batteries included (this is what the projects describes it self) then use that. There is nothing my setup does better than this project.

I wanted to have more control over my setup and some config options. Hence the title opinionated as not everybody needs what I want.

## Dockerfile

Below you can find the dockerfile. It is a multi stage build that first installs hugo and then proceeds with node.

The versions will be fed via arguments. We will see this in the docker-compose.
yaml later.

Both build steps use the alpine versions which makes it quick and more storage efficient.

Because hugo is statically linked we can copy the tool over to the node container and throw the go layer away.

Note: although we copy the folder "go" it does not actually contain the go binary. This folder contains just the compiled hugo binary.

In addition to the dependencies I also added some command line tools because we will have to manage the app from inside the container.

```dockerfile
ARG NODE_VERSION
ARG GO_VERSION

FROM golang:${GO_VERSION}-alpine as builder

RUN apk add git 

ARG HUGO_VERSION
RUN go install -v github.com/gohugoio/hugo@v${HUGO_VERSION}

FROM node:${NODE_VERSION}-alpine

COPY --from=builder /go /go

ENV GOPATH /go
ENV PATH $GOPATH/bin:$PATH

RUN apk add git curl tar gzip bash

USER node

WORKDIR /src/stvbyr-tech

COPY --chown=node . .

RUN npm install
RUN git config --global --add safe.directory /src/stvbyr-tech

ENTRYPOINT [ "npm", "run", "dev"]
```

## Docker Compose

Although it is not necessarily needed, I decided to use a docker compose file as I find docker commands can get pretty ugly and managing them with a proper configuration file is cleaner.

Needless to say if we wanna add a service in the future docker compose makes this much easier.

As mentioned above the versions of the tools can be set in this file. This includes the node version. Changing these require a rebuild.

I mounted the whole project into the container. Also I added an anonymous volume to not overwrite the contents of node_modules.

This has a caveat that I cannot see the files in node_modules and cannot use IDE features. I don't need this though as these are just build dependencies. I don't develop anything with node in this project.

```yaml
services:
    server:
        container_name: hugo_server
        build:
            dockerfile: ./Dockerfile
            context: .
            args:
                NODE_VERSION: 16.14.0
                GO_VERSION: 1.19
                HUGO_VERSION: 0.101.0
        volumes:
            - .:/src/stvbyr-tech
            - /src/stvbyr-tech/node_modules
        ports:
            - 1313:1313
```

## Working with the container

Now that we got the files set up we can build the project with `docker compose build` and then run it with `docker compose up`.

We can now access our site by going to `http://localhost:1313`. This is the same as default hugo.

After `docker compose up` we can access the container with `docker exec -it hugo_server /bin/bash`.

In here we can use all hugo functionality that we are used to. E.g. creating a new blog post with `hugo new blog/some-blog-post.md`.

## Structure

Let's talk a bit about the structure of my hugo app so that you can understand how I use the docker container.

I use a default hugo project. I don't use a theme as the components are all written and styled by myself. Except, I took inspiration from some layouts and shortcodes that others have created and adjusted them to my needs.

I have a package.json where I define some build dependencies. These include tailwind and postcss plus some more.

I decided to use the scripts section of the package.json to create all commands that I need to develop and build the site. This makes it easy to maintain.

In the dockerfile we see the entrypoint is set to call `npm run dev` to start the development server.

The command contains an important piece of configuration to make this possible: `--bind="0.0.0.0"`. This is important as the hugo server now runs inside the container.

If we want to access the site without binding it, the server assumes that we want to connect from 127.0.0.1. This will not work because the server runs now on the default docker network and has its own ip.

If we try to connect now via the browser we use our own ip that is not 127.0.0.1 anymore. By binding 0.0.0.0 we say that all connections from anywhere are allowed. Which is fine for a local setup.

I host this site on netlify which means that I need to configure the build steps via netlify.toml. Those build steps use the scripts from the package.json.

For this reason I also have a .nvmrc to look the node version. With this I make sure that netlify can build the site in a deterministic way.

This will have the side effect of maintaining the version numbers in multiple files (docker-compose.yaml, .nvmrc, netlify.toml). However most of the time a simple search and replace will do the trick.

## Conclusion

I think this is a very easy and clean setup.

It does not take a lot to dockerize a hugo application. The benefit of having confidence that the system always works as configured is great.

Also keeping your development host clean from x amount of versions of the same dependency feels pretty clean.

I hope you find this useful. If you have suggestions to this setup feel free to reach out to me on twitter.
