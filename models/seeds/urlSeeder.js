const db = require("../../config/mongoose")
const URL = require("../URL")
const url = require("../../url_shortener")

const urls = [
  "https://tw.alphacamp.co/",
  "https://cs50.harvard.edu/college/2021/fall/",
  "https://leetcode.com/"
]

db.once("open", () => {
  // Create seeds data
  for (let i = 0; i < urls.length; i++) {
    let hash = url.generateHash()
    let longURL = urls[i]
    let shortenURL = url.shortener(hash)
    URL.create({
      hash,
      long: longURL,
      shorten: shortenURL
    })
  }
  console.log("Seeds Generated")
})
