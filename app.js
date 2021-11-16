// Import modules
const express = require('express')
const exhbs = require('express-handlebars')

// Create server
const PORT = process.env.PORT || 3000
const app = express()

// Connect to MongoDB
require('./config/mongoose')

// Static files
app.use(express.static('public'))

// Set template engine to handlebars
app.engine('handlebars', exhbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// Routers
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`teenyURL APP runs on ${PORT}`)
})
