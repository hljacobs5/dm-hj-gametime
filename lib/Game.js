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

  // animate() {
  //   // console.log(this)
  //   let snakes = [this.firstSnake, this.secondSnake];
  //   let [ sn1, sn2 ] = snakes;
  //   let { x: sn1x, y: sn1y } = sn1;
  //   let { x: sn2x, y: sn2y } = sn2;
  //   let firstSnakeTrail = {
  //     x: sn1x,
  //     y: sn1y
  //   }

  //   let secondSnakeTrail = {
  //     x: sn2x,
  //     y: sn2y
  //   }
  //   // console.log(firstSnake)
  //   this.firstSnake.trails1.push(firstSnakeTrail)
  //   this.secondSnake.trails2.push(secondSnakeTrail)
  //   // console.log(firstSnake.trail)

  //   this.firstSnake.trails1.forEach(function (trail, i) {
  //     // console.log(trail.x)
  //     // console.log(trail.y)

  //     context.fillStyle = "green";
  //     context.fillRect(trail.x, trail.y, 10, 10)
  //     // context.stroke();
  //   })
    
  //   this.secondSnake.trails2.forEach(function(trail, j) {
  //     context.fillStyle = "orange";
  //     context.fillRect(trail.x, trail.y, 10, 10)    
  //   })



  //   snakes.forEach(function (snake, i) {
  //     snake.draw(context);
  //     snake.move();
  //      if (snake.x >= 960 || snake.x <= 0) {
  //           // console.log('hi')
  //           this.gameOver(context, canvas)
  //         } else if (snake.y > 640 || snake.y <= 0) {
  //           this.gameOver(context, canvas)
  //           // console.log('hi')
  //         }
  //         snakes.forEach(function(snake2, j, trails) {
  //           // console.log(this)
  //           if(i !== j && snake.isCollidingWith(snake2)) {
  //           this.gameOver(context, canvas)
  //         } 
  //           // console.log(trails[0].x)
  //           // else if (i !== j && ) {
  //             // console.log('hi')
  //           // }
  //         // else if (snake2.trails.x.isCollidingWith(snake2.x)) {
  //         //   game.gameOver(context, canvas)
  //         // } 
  //         // else {
  //         //   return
  //         // }

  //       })

  //   })
  // }

}

module.exports = Game;