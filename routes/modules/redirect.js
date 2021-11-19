const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')

// Redirect for short url
router.get('/:url', (req, res) => {
  const shortenURL = req.params.url
  URL.find({ shorten: shortenURL })
    .lean()
    .then(query => res.redirect(query[0].long))
    .catch(error => console.log(error))
})

// Export router module
module.exports = router