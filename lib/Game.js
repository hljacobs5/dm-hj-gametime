class Game {
  constructor(lives, players) {
  // this.lives = 5;
  // this.players = 2;


  }

  // restartGame() {

  // }

  // startGame() {

  // }

  gameOver(context) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "white";
    c.fillText("GAME OVER", 250, 350);
    c.fillText("Refresh to try again", 460, 450);
  }


}

module.exports = Game;