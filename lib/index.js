var GamePiece = require('./GamePiece.js');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Snake = require('./Snake.js');
var Game = require('./Game.js')

context.fillStyle = "rgba(0, 255, 0, 1)";
context.fillRect(50, 50, 10, 10);  // x, y, width, height

var column = 120;
var row = 80;

canvas.width = column * 8;
canvas.height = row * 8;

var firstSnake = new Snake(50, 100, 10, 10, "blue", 1, 0);
var secondSnake = new Snake(50, 100, 10, 10, "red", 1, 0);

console.log(firstSnake)

window.addEventListener("keydown", function(e) {

    if (e.keyCode === 38)  {
      firstSnake.dxv = 0;
      firstSnake.dy = -1;
      firstSnake.dyv = .5;
    } else if (e.keyCode === 39 ) {
      firstSnake.dxv = 2;
      firstSnake.dx = 1;
      firstSnake.dyv = 0;
    } else if (e.keyCode === 37) {
      firstSnake.dxv = .5;
      firstSnake.dx = -1;
      firstSnake.dyv = 0;
    } else if (e.keyCode === 40) {
      firstSnake.dxv = 0;
      firstSnake.dy = 1;
      firstSnake.dyv = .5;    
    }
 })

window.addEventListener("keydown", function(e) {

  if (e.keyCode === 90) {
    secondSnake.dxv = 0;
    secondSnake.dy = -1;
    secondSnake.dyv = .5;
  } else if (e.keyCode === 91) {
    secondSnake.dxv = .5;
    secondSnake.dx = 1;
    secondSnake.dyv = 0;
  } else if (e.keyCode === 17) {
    secondSnake.dxv = .5;
    secondSnake.dx = -1;
    secondSnake.dyv = 0;
  } else if (e.keyCode === 18) {
    secondSnake.dxv = 0;
    secondSnake.dy = 1;
    secondSnake.dyv = .5;
  }
})


var isGameOver = false;

var snakes = [
firstSnake,
secondSnake 
];

function animate() {
  snakes.forEach(function (snake, i) {
    snake.draw(context);
    snake.move();
     if(snake.x >= 960 || snake.x <= 0) {
          console.log('hi')
          // Game.gameOver()
        } else if (snake.y > 640 || snake.y <= 0) {
          console.log('hi')
        }
  })

}

function gameLoop () {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(canvas.width)


  if (isGameOver) {

  } else {
  animate();
}

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);