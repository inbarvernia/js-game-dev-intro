import Ball from "./ball.js";
import InputHandler from "./input.js";
import Paddle from "./paddle.js";
import Brick from "./brick.js";

export default class Game {

  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.bricks = [];
    for(let i = 0; i < 10; i ++) {
      this.bricks.push(new Brick(this, {x: i * 52, y: 30}));
    }

    this.gameObject = [this.ball, this.paddle, ...this.bricks] // Created this array for ease of use in update and draw functions: this way, even as we add more objects to the game (e.g. bricks), we don't need to keep adding object.update(deltaTime) to the update function below

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObject.forEach(object => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObject.forEach(object => object.draw(ctx));
  }
}
