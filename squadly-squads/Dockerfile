FROM node:14.18.0-alpine3.13
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5001
CMD [ "npm" , "start"]
