FROM node:16

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn global add serve

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["serve", "./build"]

