const view = document.querySelectorAll(".view")
const form = document.querySelector("#form")
const urlInput = document.querySelector("#url")
const urlAlert = document.querySelector("#invalid-url")
const utmAlert = document.querySelector("#invalid-utm")
const submitBtn = document.querySelector("#submitBtn")

// UTMs
const source = document.querySelector("#source")
const medium = document.querySelector("#medium")
const campaign = document.querySelector("#campaign")

// Listen to copy buttons clicks
view.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = event.target
    if (target.tagName === "BUTTON") {
      const url = "localhost:3000/teenyurl/" + target.dataset.url
      navigator.clipboard.writeText(url)
    }
  })
})

// Check url validation
form.addEventListener("submit", (event) => {
  const url = urlInput.value
  if (!validateURL(url)) {
    event.preventDefault()
    urlAlert.classList.remove("fadeout")
    setTimeout(() => {
      urlAlert.classList.add("fadeout")
    }, 200)
  }
})

// UTM validation
form.addEventListener("submit", (event) => {
  const srcValue = source.value
  const medValue = medium.value
  const camValue = campaign.value
  if (
    (srcValue && medValue && camValue) ||
    (!srcValue && !medValue && !camValue)
  ) {
  } else {
    event.preventDefault()
    utmAlert.classList.remove("fadeout")
    setTimeout(() => {
      utmAlert.classList.add("fadeout")
    }, 200)
  }
})

// Function

// Check if a string is valid URL
function validateURL(str) {
  let url

  try {
    url = new URL(str)
  } catch (error) {
    console.log(error)
    return false
  }
  return url.protocol === "https:" || url.protocol === "http:"
}
