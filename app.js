// Import modules
const express = require('express')
const exhbs = require('express-handlebars')
const url = require('./url_shortener')
const URL = require('./models/URL')

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
  URL.find()
    .lean()
    .sort({ _id: 'desc' })
    .then(urls => res.render('index', {
      urls,
      script: 'main.js'
    }))
})

app.post('/', (req, res) => {
  const form = req.body
  console.log(form)
  const longURL = url.combine(form)
  // Check if URL is already been shorten
  URL.find({ long: longURL })
    .lean()
    .then(query => {
      // Return the shorten url in database
      if (query.length) {
        res.render('create', {
          shortenURL: query[0].shorten,
          style: 'create.css',
          script: 'create.js'
        })
      } else {
        // Create new url for shorten url
        const hash = url.generateHash()
        const shortenURL = url.shortener(hash)

        URL.create({
          hash,
          long: longURL,
          shorten: shortenURL
        })
        res.render('create', {
          shortenURL,
          style: 'create.css',
          script: 'create.js'
        })
      }
    })
    .catch(error => console.log(error))
})

// Redirect for short url
app.get('/teenyurl/:url', (req, res) => {
  const shortenURL = req.params.url
  URL.find({ shorten: shortenURL })
    .lean()
    .then(query => res.redirect(query[0].long))
    .catch(error => console.log(error))
})


// Listen to requests
app.listen(PORT, () => {
  console.log(`teenyURL APP runs on ${PORT}`)
})
