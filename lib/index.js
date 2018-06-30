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

var firstSnake = new Snake(50, 100, 10, 10, "blue", 1, 0);
var secondSnake = new Snake(250, 100, 10, 10, "red", -1, 0);

// console.log(firstSnake)


// var { s1x, s1y } = firstSnake;
// var { s2x, s2y } = secondSnake;
// console.log(s1x)
// console.log(s1y)
// console.log(s2x)
// console.log(s2y)


window.addEventListener("keydown", function(e) {

    if (e.keyCode === 38)  {
      e.preventDefault();
      firstSnake.dxv = 0;
      firstSnake.dy = -1;
      firstSnake.dyv = .5;
    } else if (e.keyCode === 39 ) {
      e.preventDefault();
      firstSnake.dxv = 2;
      firstSnake.dx = 1;
      firstSnake.dyv = 0;
    } else if (e.keyCode === 37) {
      e.preventDefault();
      firstSnake.dxv = .5;
      firstSnake.dx = -1;
      firstSnake.dyv = 0;
    } else if (e.keyCode === 40) {
      e.preventDefault();
      firstSnake.dxv = 0;
      firstSnake.dy = 1;
      firstSnake.dyv = .5;    
    }
 })

window.addEventListener("keydown", function(e) {

  if (e.keyCode === 90) {
    e.preventDefault();
    secondSnake.dxv = 0;
    secondSnake.dy = -1;
    secondSnake.dyv = .5;
  } else if (e.keyCode === 91) {
    e.preventDefault();
    secondSnake.dxv = .5;
    secondSnake.dx = 1;
    secondSnake.dyv = 0;
  } else if (e.keyCode === 17) {
    e.preventDefault();
    secondSnake.dxv = .5;
    secondSnake.dx = -1;
    secondSnake.dyv = 0;
  } else if (e.keyCode === 18) {
    e.preventDefault();
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





// var trails = []

function animate() {

  let [ sn1, sn2 ] = snakes;
  let { x: sn1x, y: sn1y } = sn1;
  let { x: sn2x, y: sn2y } = sn2;
  let firstSnakeTrail = {
    x: sn1x,
    y: sn1y
  }

  let secondSnakeTrail = {
    x: sn2x,
    y: sn2y
  }
  // console.log(firstSnake)
  firstSnake.trail.push(firstSnakeTrail)
  secondSnake.trail.push(secondSnakeTrail)
  // console.log(firstSnake.trail)

  firstSnake.trail.forEach(function (trail, i) {
    // console.log(trail.x)
    // console.log(trail.y)

    context.fillStyle = "green";
    context.fillRect(trail.x, trail.y, 10, 10)
    // context.stroke();
  })
  
  secondSnake.trail.forEach(function(trail, j) {
    context.fillStyle = "orange";
    context.fillRect(trail.x, trail.y, 10, 10)

  })

  // console.log(snakes[0].trail)

  snakes.forEach(function(snake, i) {
    // console.log(snake.trail)
    // snake.trail.forEach(function(trails) {
    //   console.log(trails)
    // })
  })

  

  snakes.forEach(function (snake, i) {
    snake.draw(context);
    snake.move();
     if (snake.x >= 960 || snake.x <= 0) {
          // console.log('hi')
          game.gameOver(context, canvas)
        } else if (snake.y > 640 || snake.y <= 0) {
          console.log('hi')
        }
        snakes.forEach(function(snake2, j) {
          console.log(snake2)
          if(i !== j && snake.isCollidingWith(snake2)) {
             console.log('hey')
              // isGameover = true;
          }
      })
  })
  // console.log(firstSnake.x)
  // console.log(sn1x)
  // console.log(sn1y)
  // console.log(sn2x)
  // console.log(sn2y)
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