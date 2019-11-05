FROM node:latest 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./nodejs /usr/src/app
RUN npm install
EXPOSE 8080
RUN ["npm", "start" ]