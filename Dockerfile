FROM node

WORKDIR /app

# copy other project files
COPY . /app
RUN npm install
CMD [ "npm" , "start" ]
EXPOSE 3000



