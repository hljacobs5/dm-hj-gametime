var GamePiece = require('./GamePiece.js');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Snake = require('./Snake.js');
var Game = require('./Game.js')

// context.fillStyle = "rgba(0, 255, 0, 1)";
// context.fillRect(50, 50, 10, 10);  // x, y, width, height

var column = 120;
var row = 80;

canvas.width = column * 8;
canvas.height = row * 8;
var game = new Game()



window.addEventListener("keydown", function(e) {

    if (e.keyCode === 38)  {
      e.preventDefault();
      game.firstSnake.dxv = 0;
      game.firstSnake.dy = -1;
      game.firstSnake.dyv = .5;
    } else if (e.keyCode === 39 ) {
      e.preventDefault();
      game.firstSnake.dxv = 2;
      game.firstSnake.dx = 1;
      game.firstSnake.dyv = 0;
    } else if (e.keyCode === 37) {
      e.preventDefault();
      game.firstSnake.dxv = .5;
      game.firstSnake.dx = -1;
      game.firstSnake.dyv = 0;
    } else if (e.keyCode === 40) {
      e.preventDefault();
      game.firstSnake.dxv = 0;
      game.firstSnake.dy = 1;
      game.firstSnake.dyv = .5;    
    }
 })

window.addEventListener("keydown", function(e) {

  if (e.keyCode === 90) {
    e.preventDefault();
    game.secondSnake.dxv = 0;
    game.secondSnake.dy = -1;
    game.secondSnake.dyv = .5;
  } else if (e.keyCode === 91) {
    e.preventDefault();
    game.secondSnake.dxv = .5;
    game.secondSnake.dx = 1;
    game.secondSnake.dyv = 0;
  } else if (e.keyCode === 17) {
    e.preventDefault();
    game.secondSnake.dxv = .5;
    game.secondSnake.dx = -1;
    game.secondSnake.dyv = 0;
  } else if (e.keyCode === 18) {
    e.preventDefault();
    game.secondSnake.dxv = 0;
    game.secondSnake.dy = 1;
    game.secondSnake.dyv = .5;
  }
})


var isGameOver = false;


function gameLoop () {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(canvas.width)


  if (isGameOver) {

  } else {
  game.animate();
}

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);