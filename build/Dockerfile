ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine

RUN apk add git curl tar gzip

USER node:node

RUN curl --insecure -OL https://go.dev/dl/go1.19.linux-amd64.tar.gz \
    && tar -xvf /home/node ./go1.19.linux-amd64.tar.gz

ENV PATH=${PATH}:/home/node/go/bin

RUN echo $PATH && go install -v github.com/gohugoio/hugo@v0.101.0

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev"]

# ENTRYPOINT [ "tail" , "-f", "/etc/fstab"]