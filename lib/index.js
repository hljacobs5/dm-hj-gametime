var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Game = require('./Game.js');

var column = 120;
var row = 80;

canvas.width = column * 8;
canvas.height = row * 8;
var game = new Game(context);

window.addEventListener("keydown", function(e) {
	if (e.keyCode === 38 && game.firstSnake.dyv !== 1)  {
	  e.preventDefault();
	  game.playerOneMoveUp();
	} else if (e.keyCode === 39 && game.firstSnake.dxv !== 1) {
	  e.preventDefault();
	  game.playerOneMoveRight();
	} else if (e.keyCode === 37 && game.firstSnake.dxv !== 1) {
	  e.preventDefault();
	  game.playerOneMoveLeft();
	} else if (e.keyCode === 40 && game.firstSnake.dyv !== 1) {
	  e.preventDefault();
	  game.playerOneMoveDown();  
	}
});

window.addEventListener("keydown", function(e) {
	if (e.keyCode === 87 && game.secondSnake.dyv !== 1) {
		e.preventDefault();
		game.playerTwoMoveUp();
	} else if (e.keyCode === 68 && game.secondSnake.dxv !== 1) {
		e.preventDefault();
		game.playerTwoMoveRight();
	} else if (e.keyCode === 65 && game.secondSnake.dxv !== 1) {
		e.preventDefault();
		game.playerTwoMoveLeft();
	} else if (e.keyCode === 83 && game.secondSnake.dyv !== 1) {
		e.preventDefault();
		game.playerTwoMoveLeft();
		}
 });

 function playerOneWin() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = ("50px 'Russo One', sans-serif");
    context.fillText("PLAYER 1 WINS", 260, 320);
    context.fillText("Refresh to play again", 200, 375);
  }

 function playerTwoWin() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = ("50px 'Russo One', sans-serif");
    context.fillText("PLAYER 2 WINS", 260, 320);
    context.fillText("Refresh to play again", 200, 375);

  }

 function gameLoop () {    
	requestAnimationFrame(gameLoop);
	game.snakes.forEach(function (snake) {
		snake.draw(context);
		snake.move();
		});   

	if (game.playerOneWins === true) {
		playerOneWin(context, canvas);  
	} else if (game.playerTwoWins === true) {
		playerTwoWin(context, canvas);
	} else {      
		game.animate();
  } 
}
requestAnimationFrame(gameLoop);



