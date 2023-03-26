#!/usr/bin/env bash
sudo apt update && sudo apt install nodejs npm
# Install pm2 which is a production process manager for Node.js wth a built-in load balancer.
sudo npm install -g pm2
#stop any instance of our application running currently
pm2 stop example_app
# change directory into folder where application is downloaed
cd Project/
#Install application dependecies
npm install
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt
#start the application withthe process name example_app using pm2
pm2 start ./bin/www --name example_app
