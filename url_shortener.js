const url = {
  map: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",

  shortener(url) {
    // Define replacing letter map for shorten url

    // Check if url already been shorten

    // Create index key for url

    // Check if index exists, if so, recreate one

    // 
    console.log('hello')
    console.log(this.map.length)
  },

  generateId() {
    // Dummy data
    const charsOfURL = 5

    const max = this.map.length ** charsOfURL
    return Math.floor(Math.random() * max) + 1
  },

  toLong(shortenUrl) {
    console.log('Let there be loooong')
  }

}

url.shortener()
console.log(url.generateId())
url.toLong()
// module.exports = urlShortener