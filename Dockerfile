FROM node:16-bookworm-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000
CMD ["node", "dist/main"]
