# initialize the run time environment
FROM node:14.15.0
#set a working directory
WORKDIR /app

#add a path to the working directory
ENV path /app/node_modules/.bin:$PATH

# copy json packages and file in the working directory
COPY package.json /app/package.json

# install the packages
RUN npm install 
RUN npm install -g @angular/cli@12.2.3

#copy all the code
COPY . /app

#start the application
CMD ng serve --host=0.0.0.0