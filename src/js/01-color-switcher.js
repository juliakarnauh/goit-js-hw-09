function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
let timerId = null
const body = document.querySelector('body')
btnStart.addEventListener('click', ()=>{
    btnStart.disabled = true
    timerId =setInterval(() => {
let randomColor = getRandomHexColor()
body.style.backgroundColor= randomColor
}, 1000);
})

btnStop.addEventListener('click',()=>{
    clearInterval(timerId)
    btnStart.disabled = false
})
