import Ball from "./ball.js"
import Paddle from "./paddle.js"

//const startMenu = document.getElementById('startMenu')
//const gameOverMenu = document.getElementById('gameOverMenu')
//const gameInProgress = false

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

//window.addEventListener('resize', windowResize);
//const startButton = document.querySelector('.startButton');
//startButton.addEventListener('click', startGame);
//againBtn.addEventListener('click', resetGame);


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

    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

/*function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
  }
  ball.reset()
  computerPaddle.reset()
}*/

document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)

/*function endGame () {
  if (computerScoreElem == 2) or (playerScoreElem == 2) {
    alert('Boooo')
  }
}*/