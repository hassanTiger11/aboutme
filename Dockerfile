# pull official base image
FROM node:latest

# set working directory
#WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . ./
WORKDIR ./
# install app dependencies
#COPY package.json ./
#COPY package-lock.json ./
RUN npm install -g npm@8.11.0
RUN npm install react-scripts@5.0.0


EXPOSE 3000
# start app
CMD ["npm", "start"]
