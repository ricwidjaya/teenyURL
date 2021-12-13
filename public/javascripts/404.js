const countDown = document.querySelector("#countdown-number")
let time = 10

let timeOut = setInterval(countDownTimer, 1000)

function countDownTimer() {
  if (time === 0) {
    clearInterval(timeOut)
    window.location.replace("http://localhost:3000/")
  }
  countDown.innerHTML = time
  time -= 1
}
