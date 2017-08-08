'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const request = require('superagent');
const Promise = require('bluebird');
const debug = require('debug')('note:server');
const mongoose = require('mongoose');

// * creates the app... allows us to use express!
const app = express();

app.use(morgan('dev')); // logging util
app.use(cors());  // enable crosite origin resoruce scripting

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/calcifer'
// This is MONGODB_URI is so heroku can do its thing to create a db... it will recognize it! When we heroku deploy
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  debug(`listening on ${PORT}`); // this is our custome message that we created to tell us what's happening...
});

const mongo = require('mongodb')
const assert = require('assert');

// es6 promise
// mongoose.Promise = global.Promise;

// this points to the mongo data base === the mongo database is tells you the default is at 27017 on our local machine when we start the server in our terminal.
// what follows the 27017 is the name of the db.
// THIS MAY BE NOT THE BEST CORSE OF ACTION BUT IS HERE AS A BACKUP
// mongoose.connect('mongodb://localhost:27017/calcifer');

mongoose.connection.once('open', function(){
  console.log('The Connection HAS BEEN MADE!!! Now make fireworks!')
}).on('error', function(error){
  console.log('connection error: ' + error);
})

// TESTING SERVER connection
// mongo.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//
//   db.close();
// });


// router.get('/', function(req, res, next) {
//         res.render('index');
// });
//
// router.get('/get-data', function(req, res, next) {
//     console.log('getting data!')
//     var resultArray = [];
//     mongo.connect(url, function(err, db){
//       assert.equal(null, err);
//       var cursor = db.collection('test insert').find();
//       cursor.forEach(funciton(doc, err){
//         assert.equal(null, err);
//         resultArray.push(doc);
//       }, function (){
//         db.close();
//         res.render('index')
//       });
//   });
// });

// router.post('/insert', function(req, res, next) {
//   console.log('posting data!')
//   let newResponse = {
//     entry : req.body.entry
//   }
//   // THIS IS WHAT ACTUALLY INSERTS THE DATA INTO THE DATABASE!
//   mongo.connect(url, function(err, db){
//     assert.equal(null, err);
//     db.collection('test insert').insertOne(newResponse, function(err, res) {
//       assert.equal(null, err);
//       console.log('inserted NewResponse!!!!!!!')
//       db.close();
//     })
//   })
//
//   res.redirect('/')
// });

// router.post('/update', function(req, res, next) {
//
// });
//
// router.post('/delete', function(req, res, next) {
//
// });


// app.use(express.static('./public'))
//
// app.get('/discover', (req, res) => {
//   let q = req.query
//   request
//   .get('https://api.themoviedb.org/3/discover/movie')
//   .query({
//     'language': 'en-US',
//     'region': 'US',
//     'sort_by': 'popularity.desc',
//     'include_adult': 'false',
//     'include_video': 'false',
//
//     'page':`${q.page}`,
//
//     'vote_average.gte': `${q.vote_average}`,
//     'with_genres': `${q.with_genres}`,
//     'with_runtime.gte': `${q.with_runtime}`,
//     'api_key': `${process.env.theMoviedb_Token}`
//   })
//   .end((err, response) => {
//     if(err) console.log(err)
//     res.json(response.body)
//   })
// })
//
// app.listen(PORT, function() {
//   console.log(`Listening on port: "${PORT}"`);
// });
