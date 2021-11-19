const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')

// Redirect for short url
router.get('/:url', (req, res) => {
  const shortenURL = req.params.url
  URL.findOne({ shorten: shortenURL })
    .then(query => {
      query.clicks += 1
      query.save()
      res.redirect(query.long)
    })
    .catch(error => console.log(error))
})

// Export router module
module.exports = router