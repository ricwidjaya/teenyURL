const copyBtn = document.querySelector('#copyBtn')


// Listen to copy buttons clicks
copyBtn.addEventListener('click', (event) => {
  const target = event.target
  console.log(target)
  const url = 'localhost:3000/teenyurl/' + target.dataset.url
  navigator.clipboard.writeText(url)

})