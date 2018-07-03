var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Game = require('./Game.js')

var column = 120;
var row = 80;

canvas.width = column * 8;
canvas.height = row * 8;
var game = new Game(context)

window.addEventListener("keydown", function(e) {

    if (e.keyCode === 38 && game.firstSnake.dyv !== 1)  {
      e.preventDefault();
      game.firstSnake.dxv = 0;
      game.firstSnake.dy = -1;
      game.firstSnake.dyv = 1;
    } else if (e.keyCode === 39 && game.firstSnake.dxv !== 1) {
      e.preventDefault();
      game.firstSnake.dxv = 1;
      game.firstSnake.dx = 1;
      game.firstSnake.dyv = 0;
    } else if (e.keyCode === 37 && game.firstSnake.dxv !== 1) {
      e.preventDefault();
      game.firstSnake.dxv = 1;
      game.firstSnake.dx = -1;
      game.firstSnake.dyv = 0;
    } else if (e.keyCode === 40 && game.firstSnake.dyv !== 1) {
      e.preventDefault();
      game.firstSnake.dxv = 0;
      game.firstSnake.dy = 1;
      game.firstSnake.dyv = 1;    
    }
 })

window.addEventListener("keydown", function(e) {

  if (e.keyCode === 87 && game.secondSnake.dyv !== 1) {
    e.preventDefault();
    console.log()
    game.secondSnake.dxv = 0;
    game.secondSnake.dy = -1;
    game.secondSnake.dyv = 1;
  } else if (e.keyCode === 68 && game.secondSnake.dxv !== 1) {
    e.preventDefault();
    game.secondSnake.dxv = 1;
    game.secondSnake.dx = 1;
    game.secondSnake.dyv = 0;
    e.preventDefault();
  } else if (e.keyCode === 65 && game.secondSnake.dxv !== 1) {
    game.secondSnake.dxv = 1;
    game.secondSnake.dx = -1;
    game.secondSnake.dyv = 0;
  } else if (e.keyCode === 83 && game.secondSnake.dyv !== 1) {
    e.preventDefault();
    console.log(game.secondSnake.dy)
    game.secondSnake.dxv = 0;
    game.secondSnake.dy = 1;
    game.secondSnake.dyv = 1;
   }
 })

 function playerOneWin() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = ("50px 'Russo One', sans-serif")
    context.fillText("PLAYER 1 WINS", 250, 350);
  }

 function playerTwoWin() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = ("50px 'Russo One', sans-serif")
    context.fillText("PLAYER 2 WINS", 250, 350);
  }

var isGameOver = false;

 function gameLoop () {    
    requestAnimationFrame(gameLoop);

    game.snakes.forEach(function (snake, i) {
      snake.draw(context);
      snake.move();
      })   

    if (game.playerOneWins === true) {
      playerOneWin(context, canvas);  
    } else if (game.playerTwoWins === true) {
      playerTwoWin(context, canvas);
    } else {      
      game.animate();
    } 
  }
requestAnimationFrame(gameLoop);



