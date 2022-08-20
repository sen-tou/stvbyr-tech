ARG NODE_VERSION
ARG GO_VERSION

FROM golang:${GO_VERSION}-alpine as builder

ARG HUGO_VERSION
RUN go install -v github.com/gohugoio/hugo@$v{HUGO_VERSION}

FROM node:${NODE_VERSION}-alpine

COPY --from=builder /go /go

ENV GOPATH /go
ENV PATH $GOPATH/bin:$PATH

RUN apk add git curl tar gzip bash

WORKDIR /src/stvbyr-tech

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev-docker"]
