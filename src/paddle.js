export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 130;
    this.height = 20;

    this.maxSpeed = 7;
    this.speed = 0; // Default speed is 0 because the paddle should remain stationary until moved by player

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight; // Storing the canvas size as a variable so that it's accessible to other paddle functions outside of the constructor function

    this.position = {
      x: (gameWidth - this.width) / 2, // Placing the paddle in the missle of the x axis by setting its starting point (left edge) to halfway through the canvas minus half the width of the paddle
      y: gameHeight - this.height - 10 // Placing the paddle 10px up from the bottom of the canvas
    }
  }

  moveLeft() {
    this.speed = - this.maxSpeed; // Negative speed because it's moving to the left, i.e. lower on the x axis
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) { // We will use the context variable from index.js as an argument for this function
    ctx.fillStyle = '#0099ee';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(deltaTime) { // Delta time is often abbreviated dt, and is often used in games to refer to change in time
    if (!deltaTime) return; // Because delta time will be 0 for the first frame, and attempting to divide by 0 will cause problems, so instead we just return without moving the paddle

    this.position.x += this.speed; // Every delta time (i.e. every frame), the paddle will move depending on the speed it currently has, whether it's staitionary (0), moving left (- this.maxSpeed) or moving right (+ this.maxSpeed)
    
    if (this.position.x < 0) {
      this.position.x = 0; // Stops paddle from going left beyond edge of canvas
    } else if (this.position.x > (this.gameWidth - this.width)) { // i.e. if the left edge of the paddle is placed so that the right edge of the paddle reaches the right edge of the canvas
      this.position.x = this.gameWidth - this.width; // Stops paddle from going beyond right edge of canvas
    }
  }
}
