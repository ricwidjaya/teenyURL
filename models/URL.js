const mongoose = require('mongoose')

// Import Schema from mongoose
const Schema = mongoose.Schema

// Define a data Schema
const url = new Schema({
  hash: {
    type: Number,
    required: true
  },
  long: {
    type: String,
    required: true
  },
  shorten: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  }
})

// Export url Schema
module.exports = mongoose.model('URL', url)