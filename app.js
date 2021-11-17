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
  res.render('index')
})

app.post('/', (req, res) => {
  const longURL = req.body.url

  // Check if URL is already been shorten
  URL.find({ long: longURL })
    .lean()
    .then(query => {
      // Return the shorten url in database
      if (query.length) {
        res.render('index', { shortenURL: query[0].shorten })
      } else {
        // Create new url for shorten url
        const hash = url.generateHash()
        const shortenURL = url.shortener(hash)
        
        URL.create({
          hash,
          long: longURL,
          shorten: shortenURL
        })
        res.render('index', { shortenURL })
      }
    })
    .catch(error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`teenyURL APP runs on ${PORT}`)
})
