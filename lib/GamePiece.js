
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
     //velocity / speed
  }

  // isCollidingWith(object) {

  //   return !(
  //     this.x + this.width < object.x ||
  //     this.y + this.height < object.y ||
  //     this.x > object.x + object.width || 
  //     this.y > object.y + object.height
  //   );
  // }
    wallCollision() {
    if( 0 > firstSnake.x || firstSnake.x > canvas.width )
    console.log('hi')
  }

  draw(ctx) {
    const { x, y, height, width, color } = this; //destructuring

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

}
