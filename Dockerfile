FROM node:23

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

CMD [ "yarn","start:dev" ]