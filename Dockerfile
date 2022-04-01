FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

WORKDIR src
COPY ./src .
WORKDIR ../server
COPY ./server .
WORKDIR ../public
COPY ./public .
WORKDIR ..

RUN echo "npm run server & npm start" > entry.sh
RUN chmod 777 entry.sh

EXPOSE 3000
EXPOSE 30001
CMD [ "./entry.sh" ]