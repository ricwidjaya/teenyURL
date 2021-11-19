// Import modules
const express = require('express')
const exhbs = require('express-handlebars')
const routes = require('./routes') // it will find index.js directly

// Create server
const PORT = process.env.PORT || 3000
const app = express()

// Connect to MongoDB
require('./config/mongoose')

// Static files
app.use(express.static('public'))

// Body parser
app.use(express.urlencoded({ extended: true }))

// Set template engine to handlebars
app.engine('handlebars', exhbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// Routers
app.use(routes)


// Listen to requests
app.listen(PORT, () => {
  console.log(`teenyURL APP runs on port ${PORT}`)
})
