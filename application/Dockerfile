FROM node:14 as nodeBuild

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . ./

CMD [ "npm", "run", "dev" ]