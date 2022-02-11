import Ball from "./ball.js";
import InputHandler from "./input.js";
import Paddle from "./paddle.js";
import Brick from "./brick.js";
import { buildLevel, level1 } from "./levels.js";

export default class Game {

  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.bricks = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...this.bricks] // Created this array for ease of use in update and draw functions: this way, even as we add more objects to the game (e.g. bricks), we don't need to keep adding object.update(deltaTime) to the update function below

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));

    this.gameObjects = this.gameObjects.filter(object => !object.markForDeletion);
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
