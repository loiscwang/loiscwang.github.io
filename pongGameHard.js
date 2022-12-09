import Ball from "./ball"
import Paddle from "./paddle.js"

const ball = new Ball(document.getElementById("ball"))
const ball2 = new Ball(document.getElementById("ball2")) 
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

//frist ball////
let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
    computerPaddle.update(delta, ball.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}


///second ball////////
let lastTime2
function update2(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball2.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
    computerPaddle.update(delta, ball2.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}



function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) - 1
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) - 1
  }
  ball.reset()
  computerPaddle.reset()
}


document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)