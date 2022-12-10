import Ball from "./ball.js"
import Paddle from "./paddle.js"

//const startMenu = document.getElementById('startMenu')
//const gameOverMenu = document.getElementById('gameOverMenu')
//const gameInProgress = false

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const endGameElement = document.getElementById('endGame-screen')
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")


/*startMenu.className = 'active';
gameOverMenu.className = '';*/

/*function pauseGame() {
  if(!gamePaused) {
    gamePaused = true;
    gameplay.className = '';
    pauseMenu.className = 'active';
    clearInterval(gameInterval);
  }
}
function startGame() {
}*/

//delta is the time that the ball has been running/////////////////  
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

    if (isLose()) handleLose() (endGame())
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
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1;
    endGame()
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    endGame()
  }
  ball.reset()
  computerPaddle.reset()
}

function endGame () {
  if (computerScoreElem >= 2) {
    endGameElement.show(endGame-screen)
  }
  else if (playerScoreElem >= 2) {
    endGameElement.show(endGame-screen)
    console.log("haha")
  }
}

document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})


window.requestAnimationFrame(update)






