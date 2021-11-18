const view = document.querySelectorAll('.view')


// Listen to copy buttons clicks
view.forEach(link => {
  link.addEventListener('click', (event) => {
    const target = event.target
    if (target.tagName === 'BUTTON') {
      const url = 'localhost:3000/teenyurl/' + target.dataset.url
      navigator.clipboard.writeText(url)
    }
  })
})

