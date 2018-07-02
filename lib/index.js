var GamePiece = require('./GamePiece.js');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Snake = require('./Snake.js');
var Game = require('./Game.js')



var column = 120;
var row = 80;

canvas.width = column * 8;
canvas.height = row * 8;
var game = new Game()


window.addEventListener("keydown", function(e) {

    if (e.keyCode === 38 && game.firstSnake.dyv !== .5)  {
      e.preventDefault();
      game.firstSnake.dxv = 0;
      game.firstSnake.dy = -1;
      game.firstSnake.dyv = .5;
    } else if (e.keyCode === 39 && game.firstSnake.dxv !== .5) {
      e.preventDefault();
      game.firstSnake.dxv = .5;
      game.firstSnake.dx = 1;
      game.firstSnake.dyv = 0;
    } else if (e.keyCode === 37 && game.firstSnake.dxv !== .5) {
      e.preventDefault();
      game.firstSnake.dxv = .5;
      game.firstSnake.dx = -1;
      game.firstSnake.dyv = 0;
    } else if (e.keyCode === 40 && game.firstSnake.dyv !== .5) {
      e.preventDefault();
      game.firstSnake.dxv = 0;
      game.firstSnake.dy = 1;
      game.firstSnake.dyv = .5;    
    }
 })

window.addEventListener("keydown", function(e) {

  if (e.keyCode === 90 && game.secondSnake.dyv !== .5) {
    // if click left and && direction NOT right
    // !game.secondSnake.dy === 5
    e.preventDefault();
    console.log()
    game.secondSnake.dxv = 0;
    game.secondSnake.dy = -1;
    game.secondSnake.dyv = .5;
  } else if (e.keyCode === 91 && game.secondSnake.dxv !== .5) {
    e.preventDefault();
    game.secondSnake.dxv = .5;
    game.secondSnake.dx = 1;
    game.secondSnake.dyv = 0;
    // game.secondSnake.dy = 0;
    e.preventDefault();
  } else if (e.keyCode === 17 && game.secondSnake.dxv !== .5) {
    game.secondSnake.dxv = .5;
    game.secondSnake.dx = -1;
    game.secondSnake.dyv = 0;
    // game.secondSnake.dy = 0;
  } else if (e.keyCode === 18 && game.secondSnake.dyv !== .5) {
    e.preventDefault();
    console.log(game.secondSnake.dy)
    game.secondSnake.dxv = 0;
    game.secondSnake.dy = 1;
    game.secondSnake.dyv = .5;
  }
})


var isGameOver = false;

  function animate() {
    // console.log(this)
    let snakes = [game.firstSnake, game.secondSnake];
    let [ sn1, sn2 ] = snakes;
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

    game.firstSnake.trail.forEach(function (position) {
        if (game.firstSnake.x === position.x && game.firstSnake.y === position.y) {
            game.updatePlayerTwoScore();
            game.gameOver(context, canvas);
        } else if(game.secondSnake.x === position.x && game.secondSnake.y === position.y) {
            game.updatePlayerOneScore();
            game.gameOver(context, canvas)
          // console.log('hey')
        }
    })
     game.firstSnake.trail.push(firstSnakeHead);
    
    game.secondSnake.trail.forEach(function(position) {
      if (game.secondSnake.x === position.x && game.secondSnake.y === position.y) {
        game.updatePlayerOneScore()
        game.gameOver(context, canvas);
      } else if(game.firstSnake.x === position.x && game.firstSnake.y === position.y) {
        game.updatePlayerTwoScore();
        game.gameOver(context, canvas)
        // console.log('hey')
      }
    })
    game.secondSnake.trail.push(secondSnakeHead)

    snakes.forEach(function (snake, i) {
      snake.draw(context);
      snake.move();
       if (snake.x >= 960 || snake.x <= 0) {
            game.gameOver(context, canvas)
          } else if (snake.y > 640 || snake.y <= 0) {
            game.gameOver(context, canvas)
          }
          snakes.forEach(function(snake2, j) {
            if(i !== j && snake.isCollidingWith(snake2)) {
            game.gameOver(context, canvas)
          } 
        })
     })          
  }


function gameLoop () {
  game.player1Score();
  game.player2Score();



  if (isGameOver) {

  } else {
  animate();
}

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);