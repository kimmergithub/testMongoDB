===
Package JSON info
=======================

MAKE SURE YOU ====
=================
npm install

{
  "name": "301-final_project",
  "version": "1.0.0",
  "description": "We know that in todays world it can be hard to choose what to spend your time watching. With all of the different platforms and channels vying for your attention it can get confusing. Here at Pick-A-Flick we've introduced a novel app with a few helpful functions to make sure you can spend less time deciding and more time watching.",
  "main": "server.js",
  "scripts": {
    "test": "DEBUG='note*' mocha",
    "start": "DEBUG='note' node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/esack7/301-Final_Project.git"
  },
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/esack7/301-Final_Project/issues"
  },
  "homepage": "https://github.com/esack7/301-Final_Project#readme",
  "dependencies": {
    "bluebird": "^3.5.0",
    "body-parser": "^1.17.2",
    "cors": "^2.8.4",
    "debug": "^2.6.8",
    "express": "^4.15.4",
    "mongodb": "^2.2.30",
    "mongoose": "^4.11.5",
    "morgan": "^1.8.2"
  },
  "devDependencies": {
    "chai": "^4.1.1",
    "mocha": "^3.5.0",
    "superagent": "^3.5.2"
  }
}
