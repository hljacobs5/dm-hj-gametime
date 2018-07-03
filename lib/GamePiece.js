let Game = require('./Game.js');


module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx = 1, dy = 1) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx; // direction: 1 === right, 0 === stop, -1 === left
    this.dxv = 1;
    this.dy = dy;
    this.dyv = 0;
    this.trail = [];
    this.score = 0;
    //this.trails2 = [];
     //velocity / speed
  }

  isCollidingWith(snake) {

    return !(
      this.x + this.width < snake.x ||
      this.y + this.height < snake.y ||
      this.x > snake.x + snake.width || 
      this.y > snake.y + snake.height
    );
  }

  draw(ctx) {
    const { x, y, height, width, color } = this; //destructuring

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  move() {
    this.x += this.dx * this.dxv ;
    this.y += this.dy * this.dyv ;
    
  }

  // gameOver(context, canvas) {
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //   context.fillStyle = "white";
  //   context.fillText("GAME OVER", 250, 350);
  //   context.fillText("Refresh to try again", 460, 450);
  // }

  // updatePlayerOneScore() {
  //   // console.log(this.GamePiece)
  //   this.player1Score.score ++
  //   // console.log(this.firstSnake.score)
  // }
  
  // updatePlayerTwoScore() {

  //   // localStorage.setItem("score", this.secondSnake.score)
  //   this.player2Score.score ++
  //   // console.log(this.GamePiece)
  //   // console.log(this.secondSnake.score)
  // }

  // player1Score() {
  //   context.fillStyle = "white";
  //   context.font = "30px 'Russo One', sans-serif";
  //   context.fillText("Player One: " + this.player1Score, 10, 630)
  // }

  // player2Score() {
  //   context.fillStyle = "white";
  //   context.font = "30px 'Russo One', sans-serif";
  //   context.fillText("Player Two: " + this.player2Score, 650, 630)
  // }

}
