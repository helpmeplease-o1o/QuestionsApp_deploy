# Dockerfile for Question app
FROM node:4.2.6

MAINTAINER Anton Kasperovich anton.kaspiarovich@accenture.com

# Make a folder for our backend
RUN mkdir /app
WORKDIR /app

# Change urls on httpS to allow work in ADOP network
RUN git config --global url."https://".insteadOf git://

# Add package.json, bower.json, .bowerrc to allow caching dependecies
COPY package.json .bowerrc bower.json /app/

# Install app dependencies
RUN npm rebuild node-sass
RUN rm -rf node_modules
RUN npm i
RUN npm install
RUN npm install -g bower grunt-cli http-server
RUN npm install grunt-contrib-imagemin --save-dev

RUN bower install --allow-root

# Copy application source code
COPY . /app/

RUN grunt build

EXPOSE 80

# Run application
CMD ["node", "/app/api"]
