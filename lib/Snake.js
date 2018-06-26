class Snake extends GamePiece {
	constructor(x, y, height, width, color, dx) {
			super(x, y, height, width, color, dx);
	
	}

}

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





module.exports = Snake;