//Can only do this if you put 'module type in the html'///////////////////////////////////////////////////////////////
import Ball from "./ball.js"
import Paddle from "./paddle.js"

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

/* playing around...

//const startMenu = document.getElementById('startMenu')
//const gameOverMenu = document.getElementById('gameOverMenu')
//const gameInProgress = false

function pauseGame() {
  if(!gamePaused) {
    gamePaused = true;
    gameplay.className = '';
    pauseMenu.className = 'active';
    clearInterval(gameInterval);
  }
}
function startGame() {
} 

function endGame () {
  if (computerScoreElem >= 2) {
    endGameElement.show(endGame-screen)
  }
  else if (playerScoreElem >= 2) {
    endGameElement.toggleAttribute('endGame-screen')
    console.log("haha")
  }
}*/


//This function count the time and update the background colors, speed of ball and paddle//////////////////////////////////////////
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
    if (movingBall()) endGame()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}
console.log()

//This function make sure the ball is moving and is bouching when it hit the walls, but only the top two walls////////////////////////
function movingBall() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}
console.log()

//This function make sure game is over when a ball tounch the innerHeights////////////////////////
function endGame() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    window.location.href = "pongGameRestart.html";
  } else {
    window.location.href = "pongGameRestart.html";
  }
}
console.log()

//the player paddle will follow the mouse /////////////////////////////////////////////////////////////
document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)






