const view = document.querySelectorAll('.view')
const form = document.querySelector('#form')
const urlInput = document.querySelector('#url')
const alert = document.querySelector('.alert')
const submitBtn = document.querySelector('#submitBtn')


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


// Check url validation
form.addEventListener('submit', (event) => {
  const url = urlInput.value
  if (!validateURL(url)) {
    event.preventDefault()
    alert.classList.remove('fadeout')
    setTimeout(() => { alert.classList.add('fadeout') }, 200)
  }
  const validation = validateURL()
  console.log(`validation: ${validation}`)
})

// Function

// Check if a string is valid URL
function validateURL(str) {
  let url

  try {
    url = new URL(str)
    console.log(url)
  } catch (error) {
    console.log(error)
    return false
  }
  return url.protocol === 'https:' || url.protocol === 'http:'
}