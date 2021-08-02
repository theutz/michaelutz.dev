FROM node:slim

COPY package*.json ./

RUN npm ci

COPY action.js /action.js

ENTRYPOINT ["node", "/action.js"]
