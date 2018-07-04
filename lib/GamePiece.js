
module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx = 1, dy = 1) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx; 
    this.dxv = 1;
    this.dy = dy;
    this.dyv = 0;
    this.trail = [];
  }

  isCollidingWith(snake) {
    return !(
      this.x + this.width < snake.x ||
      this.y + this.height < snake.y ||
      this.x > snake.x + snake.width || 
      this.y > snake.y + snake.height
    );
  }

  draw(ctx) {
    const { x, y, height, width, color } = this; 

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;  
  }
};
