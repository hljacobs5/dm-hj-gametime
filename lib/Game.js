var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var GamePiece = require('./GamePiece.js');
let gamePiece = new GamePiece(context)

class Game {
  constructor() {
    this.firstSnake = new GamePiece(500, 500, 10, 10, "blue", 1, 0); 
    this.secondSnake = new GamePiece(200, 500, 10, 10, "red", -1, 0);
    this.snakes = [this.firstSnake, this.secondSnake]
    this.gameLoop = this.gameLoop.bind(this)
    this.playerOneWins = false;
    this.playerTwoWins = false;
  }


 gameLoop () {
    
    requestAnimationFrame(this.gameLoop);
    // this.animate(context, canvas)
  
    if (this.playerOneWins) {
      this.playerOneWin(context, canvas);
  
    } else if (this.playerTwoWins) {
      this.playerTwoWin(context, canvas);
    } else {      
    this.animate();
    }
  
  }


  animate() {

    let [ sn1, sn2 ] = this.snakes;
    let { x: sn1x, y: sn1y } = sn1;
    let { x: sn2x, y: sn2y } = sn2;
    let firstSnakeHead = {
      x: sn1x,
      y: sn1y
    }
    
    let secondSnakeHead = {
      x: sn2x,
      y: sn2y
    }
    
    this.firstSnake.trail.forEach( (position) => {
        if (sn1.x === position.x && sn1.y === position.y || sn1.x >= 960 || sn1.x <= 0 ) {
          this.playerTwoWins = true;
          this.playerTwoWin(context, canvas); 
        } else if(sn2.x === position.x && sn2.y === position.y || sn2.x >= 960 || sn2.x <= 0 ) {
          this.playerOneWins = true;
          this.playerOneWin(context, canvas);    
        } else if(this.firstSnake.isCollidingWith(this.secondSnake)) {
          this.playerTwoWins = true;
          this.playerTwoWin(context, canvas)
        } else if(this.secondSnake.isCollidingWith(this.firstSnake)) {
          this.playerOneWins = true;
          this.playerOneWin(context, canvas)
        }
    })
     this.firstSnake.trail.push(firstSnakeHead);
    
    this.secondSnake.trail.forEach( (position) => {
      if (sn2.x === position.x && sn2.y === position.y || sn2.y > 640 || sn2.y <= 0) {
        this.playerOneWins = true;
        this.playerOneWin(context, canvas);
      } else if(sn1.x === position.x && sn1.y === position.y || sn1.y > 640 || sn1.y <= 0) {
        this.playerTwoWins = true;
        this.playerTwoWin(context, canvas);
      }
    })
    this.secondSnake.trail.push(secondSnakeHead)

    this.snakes.forEach(function (snake, i) {
      snake.draw(context);
      snake.move();
      })          
  }

  playerOneWin(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillText("PLAYER 1 WINS", 250, 350);
    context.fillText("Refresh to try again", 460, 450);
  }

  playerTwoWin(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillText("PLAYER 2 WINS", 250, 350);
    context.fillText("Refresh to try again", 460, 450);
  }

}

module.exports = Game;