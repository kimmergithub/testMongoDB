'use strict';

const mongoose = require('mongoose');
// this is a best practise
const Schema = mongoose.Schema;

// Create SCHEME AND model
// We will do this for every SCHEMA ever moving forward
const entrySchema = new Schema({
  // Name must be a string and a name is required!
  // YOU CAN GOOGLE THESE MONGOOSE SCHEMA TYPES
  entry: { type: String, require: true }
})

module.exports = mongoose.model('Entries', entrySchema)
