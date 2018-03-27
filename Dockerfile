FROM node

RUN mkdir /opt/trainingdayapp
WORKDIR /opt/trainingdayapp

COPY . /opt/trainingdayapp/

RUN npm install

# expose port
EXPOSE 80

# start app
CMD [ "node", "/opt/trainingdayapp/server.js" ]
