// Import modules
const express = require('express')
const exhbs = require('express-handlebars')

// Create server
const PORT = process.env.PORT || 3000
const app = express()

// Connect to MongoDB
require('./config/mongoose')


// Routers
app.get('/', (req, res) => {
  res.send(`<h1>teenyURL Project</h1>`)
})

app.listen(PORT, () => {
  console.log(`teenyURL APP runs on ${PORT}`)
})
