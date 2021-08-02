FROM node:slim

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY action.js /action.js

ENTRYPOINT ["node", "/action.js"]
