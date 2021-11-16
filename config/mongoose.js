const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/teeny-url"

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
const db = mongoose.connection

// Listen to error
db.on('error', () => {
  console.log('Failed Connection to MongoDB.')
})

// Successfully connected
db.once('open', () => {
  console.log('MongoDB Connected')
})

module.exports = db
