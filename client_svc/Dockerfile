FROM node:8

#Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
# EXCEPT for files that are inside of the .dockerignore
COPY . .

CMD [ "npm", "start" ]