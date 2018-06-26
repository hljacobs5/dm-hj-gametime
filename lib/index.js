var GamePiece = require('./GamePiece.js');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');


context.fillStyle = "rgba(0, 255, 0, 1)";
context.fillRect(50, 50, 10, 10);  // x, y, width, height

var firstSnake = new GamePiece(50, 100, 10, 10, 1);
// var secondBlock = new GamePiece(250, 50, 10, 10, -1);

var isGameOver = false;

var snakes = [
firstSnake 
];

function animate() {
  snakes.forEach(function (snake, i) {
    snake.draw(context);
    snake.move();
  })
}

  //   blocks.forEach(function (block2, j) {
  //     if (i !== j && block.isCollidingWith(block2)) {
  //       isGameOver = true;
  //     }
  //   })
  // });
  


function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (isGameOver) {

  } else {
  animate();
}

  requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click', function (event) {
  console.log('You clicked me!');
  console.log('x:', event.offsetX, 'y:', event.offsetY);
  var newBlock = new GamePiece(event.offsetX, event.offsetY, 10, 10);
  blocks.push(newBlock);

});

requestAnimationFrame(gameLoop);