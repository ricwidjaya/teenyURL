const express = require("express")
const router = express.Router()
const URL = require("../../models/URL")

// Redirect for short url
router.get("/:url", (req, res) => {
  const shortenURL = req.params.url
  URL.findOne({ shorten: shortenURL })
    .then((query) => {
      if (query) {
        query.clicks += 1
        query.save()
        res.redirect(query.long)
      } else {
        res.render("404", {
          style: "404.css",
          script: "404.js"
        })
      }
    })
    .catch((error) => console.log(error))
})

// Handle URLs which are not in the database

// Export router module
module.exports = router
