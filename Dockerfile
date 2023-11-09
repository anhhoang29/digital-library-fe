FROM node as builder
WORKDIR /app
COPY package.json .
