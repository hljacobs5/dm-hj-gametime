class Game {
  constructor(lives, players) {
  // this.lives = 5;
  // this.players = 2;


  }

  // restartGame() {

  // }

  // startGame() {

  // }

  gameOver(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillText("GAME OVER", 250, 350);
    context.fillText("Refresh to try again", 460, 450);
  }


}

module.exports = Game;