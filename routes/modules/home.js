const express = require("express")
const router = express.Router()
const URL = require("../../models/URL")
const url = require("../../url_shortener")

// Landing page
router.get("/", (req, res) => {
  URL.find()
    .lean()
    .sort({ _id: "desc" })
    .then((urls) =>
      res.render("index", {
        urls,
        script: "main.js"
      })
    )
})

// Create new shorten URL
router.post("/", (req, res) => {
  const form = req.body
  const longURL = url.combine(form)
  // Check if URL is already been shorten
  URL.find({ long: longURL })
    .lean()
    .then((query) => {
      // Return the shorten url in database
      if (query.length) {
        return res.render("create", {
          shortenURL: query[0].shorten,
          style: "create.css",
          script: "create.js"
        })
      }

      // Create new url for shorten url
      const hash = url.generateHash()
      const shortenURL = url.shortener(hash)

      URL.create({
        hash,
        long: longURL,
        shorten: shortenURL
      })

      res.render("create", {
        shortenURL,
        style: "create.css",
        script: "create.js"
      })
    })
    .catch((error) => console.log(error))
})

// Export router module
module.exports = router
