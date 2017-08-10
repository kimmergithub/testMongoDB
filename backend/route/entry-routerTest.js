'use strict';
const express = require('express');
const app = express();


const Entry = require('../model/responses-data.js');

// TO TEST THIS:  Run the server! npm start!  Go to localhost:3000/  and check the terminal! Where the server is running!  You should see a get request console.log!
app.get('../', function(){
  console.log('GET request')
});
