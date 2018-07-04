const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function () {

  it('should have properties', function () {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1, 1);
    const expectedObj = {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dxv: 1,
      dy: 1,
      dyv: 0,
      trail: []
    };

    assert.deepEqual(gamePiece, expectedObj);
  })

  it('should be able to collide with other objects', function () {
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const gamePiece2 = new GamePiece(58, 58, 10, 10, 'rgb(250, 0, 0', 1);

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);
    assert.isTrue(isColliding);
  })
  
  it('should be able to move', function () {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    gamePiece.move();
    assert.equal(gamePiece.x, 51)
  })
})
