
module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx = 1, dy = 1) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx; // direction: 1 === right, 0 === stop, -1 === left
    this.dxv = .5;
    this.dy = dy;
    this.dyv = 0;
    this.trails1 = [];
    this.trails2 = [];
     //velocity / speed
  }

  isCollidingWith(snake) {

    return !(
      this.x + this.width < snake.x ||
      this.y + this.height < snake.y ||
      this.x > snake.x + snake.width || 
      this.y > snake.y + snake.height
    );
  }
  //   wallCollision() {
  //   if( 0 > firstSnake.x || firstSnake.x > canvas.width )
  //   console.log('hi')
  // }

  draw(ctx) {
    const { x, y, height, width, color } = this; //destructuring

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  // drawTrail(ctx) {
  //   ctx.fillStyle = "green";
  //   ctx.fillRect(this.x, this.y, 10, 10)
  // }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

}
