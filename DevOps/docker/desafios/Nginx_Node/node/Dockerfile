FROM node:18-buster

RUN apt-get update && \
  apt-get install -y netcat-openbsd && \
  wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
  chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

COPY package*.json ./

RUN chown -R node:node /usr/src/app

USER node

COPY . .
