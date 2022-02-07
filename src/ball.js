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

    // Detects collision with paddle:
    let bottomOfBall = this.position.y + this.size;
    let topOfPAddle = this.game.paddle.position.y; // Because collision will always be between the bottom of the ball and the top of the paddle
    let leftOfPaddle = this.game.paddle.position.x;
    let rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    if (bottomOfBall >= (topOfPAddle) && this.position.x > leftOfPaddle && this.position.x < rightOfPaddle) {
      this.speed.y = - this.speed.y;
      this.position.y = topOfPAddle - this.size;
    }
  }

}
