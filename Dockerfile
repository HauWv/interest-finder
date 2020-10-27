FROM node:14-alpine

ADD package.json package-lock.json ./

RUN npm install

ADD . .

CMD ["npm", "start"]