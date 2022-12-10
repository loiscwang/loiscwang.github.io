import Ball from "./ball2.js"
import Paddle from "./paddle.js"

const ball = new Ball(document.getElementById("ball"))
const ball2 = new Ball(document.getElementById("ball2")) 
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const computerPaddle2 = new Paddle(document.getElementById("computer-paddle2"))

//This function count the time and update the background colors, speed of ball and paddle//////////////////////////////////////////
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

    if (movingBall()) endGame() 
    else if (movingBall2()) endGame2() 
  }

  lastTime = time
  window.requestAnimationFrame(update)
}
console.log()

//This is for ball1 //////////////////////
function movingBall() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
  }
function endGame() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    window.location.href = "pongGameRestart.html";
  } else {
    window.location.href = "pongGameRestart.html";
  }
}
console.log()

//This is for ball2 ///////////////////////
function movingBall2() {
    const rect = ball2.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}
function endGame2() {
    const rect = ball2.rect()
    if (rect.right >= window.innerWidth) {
        window.location.href = "pongGameRestart.html";
    } else {
        window.location.href = "pongGameRestart.html";
    }
}
console.log()

//The player paddle contorl////////////
document.addEventListener("mousemove", i => {
  playerPaddle.position = (i.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)