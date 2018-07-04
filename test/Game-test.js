const { assert } = require('chai');
const Game = require('../lib/Game.js');


describe('Game', function () {

  it('should have two players', function () {
    const newGame = new Game()
    assert.equal(newGame.snakes.length, 2)
  })

  it.skip('should have no one win right away', function () {
      const newGame = new Game();
      console.log(newGame.playerOneWins)

      assert.equal(newGame.playerOnewins, false)
    //   assert.equal(newGame.playerTwowins, false)

  })

  it('should be able to move down', function() {
      const newGame = new Game();
      newGame.animate()
      newGame.playerOneMoveDown();
      newGame.firstSnake.move()
      newGame.animate();
      assert.equal(newGame.firstSnake.dyv, 1)
      assert.equal(newGame.firstSnake.dxv, 0)
  })

  it('should be able to move up', function() {
    const newGame = new Game();
    newGame.animate()
    newGame.playerOneMoveUp();
    newGame.firstSnake.move()
    newGame.animate();
    assert.equal(newGame.firstSnake.dyv, 1)
    assert.equal(newGame.firstSnake.dxv, 0)
  })

  it('should be able to move right', function() {
    const newGame = new Game();
    newGame.animate()
    newGame.playerOneMoveRight();
    newGame.firstSnake.move()
    newGame.animate();
    assert.equal(newGame.firstSnake.dyv, 0)
    assert.equal(newGame.firstSnake.dxv, 1)
  })
  
  it('should be able to move left', function() {
    const newGame = new Game();
    newGame.animate()
    newGame.playerOneMoveLeft();
    newGame.firstSnake.move()
    newGame.animate();
    assert.equal(newGame.firstSnake.dyv, 0)
    assert.equal(newGame.firstSnake.dxv, 1)
  })

  it('should start off with no trail', function () {
      const newGame = new Game();
      assert.equal(newGame.firstSnake.trail.length, 0)
  })

  it('should push in previous cordinates to the trail when moving', function () {
      const newGame = new Game();

      newGame.animate()
      assert.equal(newGame.firstSnake.trail.length, 1)
      newGame.animate();
      newGame.animate(newGame.firstSnake.trail.length, 2)
  })

  it('should be able to have player one collide with the right wall', function() {
      const newGame = new Game();
      newGame.firstSnake.x = 960
      newGame.animate();
      newGame.firstSnake.move();
      newGame.animate()
      assert.equal(newGame.playerTwoWins, true)
  })

  it('should be able to have player one collide with the left wall', function() {
    const newGame = new Game();
    newGame.firstSnake.x = 0
    newGame.playerOneMoveLeft();
    newGame.animate();
    newGame.firstSnake.move();
    newGame.animate()
    assert.equal(newGame.playerTwoWins, true)
  })

  it('should be able to have player one collide with the upper wall', function() {
    const newGame = new Game();
    newGame.firstSnake.x = 100
    newGame.firstSnake.y = 0
    newGame.animate();
    newGame.playerOneMoveUp();
    newGame.animate();
    newGame.firstSnake.move();
    newGame.animate()
    assert.equal(newGame.playerTwoWins, true)
  })

  it('should be able to have player one collide with the bottom wall', function() {
    const newGame = new Game();
    newGame.firstSnake.x = 100
    newGame.firstSnake.y = 639
    newGame.animate();
    newGame.playerOneMoveUp();
    newGame.animate();
    newGame.firstSnake.move();
    newGame.animate()
    assert.equal(newGame.playerTwoWins, true)
  })

  it('should be able to have player two collide with the upper wall', function() {
    const newGame = new Game();
    newGame.secondSnake.x = 100
    newGame.secondSnake.y = 0
    newGame.animate();
    newGame.playerTwoMoveUp();
    newGame.animate();
    newGame.secondSnake.move();
    newGame.animate()
    assert.equal(newGame.playerOneWins, true)
  })

  it('should be able to have player two collide with the bottom wall', function() {
    const newGame = new Game();
    newGame.secondSnake.x = 100
    newGame.secondSnake.y = 639
    newGame.animate();
    newGame.playerOneMoveUp();
    newGame.animate();
    newGame.secondSnake.move();
    newGame.animate()
    assert.equal(newGame.playerOneWins, true)
  })

  it('should be able to have player two collide with the left wall', function() {
      const newGame = new Game();
      newGame.secondSnake.x = 0;
      newGame.animate();
      newGame.secondSnake.move();
      newGame.animate();
      newGame.animate();
      assert.equal(newGame.playerOneWins, true)
  })

  it('should be able to have player two collide with the right wall', function() {
    const newGame = new Game();
    newGame.secondSnake.x = 960;
    newGame.playerTwoMoveRight();
    newGame.animate();
    newGame.secondSnake.move();
    newGame.animate();
    newGame.animate();
    assert.equal(newGame.playerOneWins, true)
  })

  it('should allow player two to lose when colliding with player one tail', function() {
      const newGame = new Game();
      newGame.firstSnake.x = 100;
      newGame.firstSnake.y = 125;
      newGame.secondSnake.x = 102;
      newGame.secondSnake.y = 125

      newGame.playerOneMoveDown();
      newGame.firstSnake.move()
      newGame.secondSnake.move();
      newGame.animate();
      newGame.firstSnake.move()
      newGame.secondSnake.move();
      newGame.animate();
      assert.equal(newGame.playerOneWins, false)

      newGame.playerOneMoveDown();
      newGame.secondSnake.move();
      newGame.animate();
      newGame.animate();
      assert.equal(newGame.playerOneWins, true)
  })

  it('should allow player one to lose when colliding with player two trail', function() {
      const newGame = new Game();
      newGame.firstSnake.x = 100;
      newGame.firstSnake.y = 125;
      newGame.secondSnake.x = 102;
      newGame.secondSnake.y = 125

      newGame.playerTwoMoveDown();
      newGame.secondSnake.move();
      newGame.firstSnake.move();
      newGame.animate();
      assert.equal(newGame.playerTwoWins, false)

      newGame.secondSnake.move();
      newGame.firstSnake.move();
      newGame.animate();
      newGame.animate();
      assert.equal(newGame.playerTwoWins, true)
  })


})