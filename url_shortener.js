const url = {
  map: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  charsOfURL: 5,

  base() {
    return this.map.length
  },

  shortener(id) {
    const base = this.base()

    // Convert Id into base 62
    shortenURL = ''
    while (id > 0) {
      shortenURL = this.map[id % base] + shortenURL
      id = Math.floor(id / base)
    }

    return shortenURL
  },

  // New id for new url
  generateHash() {
    const max = this.map.length ** this.charsOfURL
    return Math.floor(Math.random() * max) + 1
  },

  // URL concatenation
  combine(form) {
    let longURL = form.url
    if (form.source && form.medium && form.campaign) {
      longURL += `?utm_source=${form.source}&utm_medium=${form.medium}&utm_campaign=${form.campaign}`
      return longURL
    }
    return longURL
  }
}


module.exports = url