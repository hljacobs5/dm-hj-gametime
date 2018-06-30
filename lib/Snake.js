const GamePiece = require('./GamePiece.js');

class Snake extends GamePiece {
	constructor(x, y, height, width, color, dx) {
			super(x, y, height, width, color, dx);
	  //  this.trail = [];
	}

  //   isCollidingWith() {
  
  //   return !(
  //     this.x + this.width < object.x ||
  //     this.y + this.height < object.y ||
  //     this.x > object.x + object.width || 
  //     this.y > object.y + object.height
  //   );
  // }

  // wallCollision() {
  //   if( 0 > firstSnake.x || firstSnake.x > canvas.width )
  //   console.log('hi')
  // }

}

module.exports = Snake;