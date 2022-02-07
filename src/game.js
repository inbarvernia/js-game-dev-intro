import Ball from "./ball";
import InputHandler from "./input";
import Paddle from "./paddle";

export default class Game {

  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    const ball = new Ball(this);
    const paddle = new Paddle(this);

    new InputHandler(paddle);
  }

  update(deltaTime) {
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
  }
}
