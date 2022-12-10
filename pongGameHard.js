import Ball from "./ball2.js"
import Paddle from "./paddle.js"

const ball = new Ball(document.getElementById("ball"))
const ball2 = new Ball(document.getElementById("ball2")) 
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const computerPaddle2 = new Paddle(document.getElementById("computer-paddle2"))

//This is for the timing/velcity of the ball////
let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
    computerPaddle.update(delta, ball.y)
    ball2.update(delta, [playerPaddle.rect(), computerPaddle2.rect()])
    computerPaddle2.update(delta, ball2.y)

    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) handleLose() 
    else if (isLose2()) handleLose2() 
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

//This is for the first ball////
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

//This is for the second ball////
function isLose2() {
    const rect = ball2.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}
function handleLose2() {
    const rect = ball2.rect()
    if (rect.right >= window.innerWidth) {
      playerScoreElem.textContent = parseInt(playerScoreElem.textContent) - 1
    } else {
      computerScoreElem.textContent = parseInt(computerScoreElem.textContent) - 1
    }
    ball.reset()
    computerPaddle.reset()
}

//The player paddle contorl////////////
document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)