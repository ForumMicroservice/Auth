FROM node:20-alpine
EXPOSE 4000
WORKDIR /usr/src/app/auth
COPY . ./
RUN ["npm", "install"]