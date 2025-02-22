FROM node:23

WORKDIR /app

COPY package.json .

RUN yarn

COPY ./src .

RUN npm install -g npm@11.1.0

CMD [ "yarn","start:dev" ]