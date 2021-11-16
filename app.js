// Import modules
const express = require('express')
const exhbs = require('express-handlebars')
const shortenUrl = require('./url_shortener')

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
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const charsOfURL = 5
  console.log(req.body)
  shortenUrl()
})

app.listen(PORT, () => {
  console.log(`teenyURL APP runs on ${PORT}`)
})
