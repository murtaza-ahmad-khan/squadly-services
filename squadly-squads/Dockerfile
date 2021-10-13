FROM node:14.18.0-alpine3.13
WORKDIR /app
COPY package*.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
      then npm install; \
      else npm install --only-production; \
      fi
COPY . .
EXPOSE 5001
CMD [ "npm" , "start"]
