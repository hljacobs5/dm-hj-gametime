var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var GamePiece = require('./GamePiece.js');


class Game {
  constructor(lives, player1) {
    this.firstSnake = new GamePiece(50, 100, 10, 10, "blue", 1, 0); 
    this.secondSnake = new GamePiece(250, 100, 10, 10, "red", -1, 0);
  // this.lives = 5;
  }

  // restartGame() {

  // }

  // startGame() {
  //   var firstSnake = new Snake(50, 100, 10, 10, "blue", 1, 0);
  //   var secondSnake = new Snake(250, 100, 10, 10, "red", -1, 0);
  //   var snakes = [firstSnake, secondSnake];
  // }

  gameOver(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillText("GAME OVER", 250, 350);
    context.fillText("Refresh to try again", 460, 450);
  }

  updatePlayerOneScore() {
    this.firstSnake.score ++
    console.log(this.firstSnake.score)
  }

  updatePlayerTwoScore() {
    this.secondSnake.score ++
    console.log(this.secondSnake.score)
  }

  player1Score() {
    context.fillStyle = "Green";
    context.font = "45px 'Indie Flower', cursive";
    context.fillText("Score: " + this.firstSnake.score, 100, 100)
  }

  player2Score() {
    context.fillStyle = "Green";
    context.font = "45px 'Indie Flower', cursive";
    context.fillText("Score: " + this.secondSnake.score, 300, 300)
  }
  

}

module.exports = Game;