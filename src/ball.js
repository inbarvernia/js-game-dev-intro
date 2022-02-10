import { detectCollision } from "./collisionDetection.js";

export default class Ball {

  constructor(game) {
    this.game = game; // Gives other methods in this class access to the game object, so that we can use it to refer to other game objects (paddle and bricks)

    this.image = document.getElementById('ball_img');

    this.position = { x: 10, y: 10};
    
    this.speed = {x: 2, y: 2};

    this.size = 16;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

   // Detects collision with walls on left and right: 
    if (this.position.x > this.gameWidth - this.size || this.position.x < 0) {
      this.speed.x = - this.speed.x;
    }
    
    // Detects collision with walls on top and bottom:
    if (this.position.y > this.gameHeight - this.size || this.position.y < 0) {
      this.speed.y = - this.speed.y;
    }
    
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = - this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }

}
