FROM node:latest 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./nodejs/package*.json /usr/src/app/
RUN npm install
EXPOSE 8080
CMD ["npm", "start" ]