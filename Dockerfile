# Node Base Image
FROM node:12.2.0-alpine

#Working Directry
WORKDIR /node

#Copy the Code
COPY . .

#Install the dependecies
RUN npm install
RUN npm install --save-dev @babel/core mocha
#RUN npm run test
EXPOSE 8000

#Run the code
CMD ["node","app.js"]
