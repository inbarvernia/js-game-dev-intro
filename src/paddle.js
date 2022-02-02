export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 130;
    this.height = 20;

    this.position = {
      x: (gameWidth - this.width) / 2, // Placing the paddle in the missle of the x axis by setting its starting point (left edge) to halfway through the canvas minus half the width of the paddle
      y: gameHeight - this.height - 10 // Placing the paddle 10px up from the bottom of the canvas
    }
  }

  draw(ctx) { // We will use the context variable from index.js as an argument for this function
    ctx.fillStyle = '#0099ee';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(deltaTime) { // delta time is often abbreviated dt, and is often used in games to refer to change in time
    if (!deltaTime) return; // Because delta time will be 0 for the first frame, and attempting to divide by 0 will cause problems, so instead we just return without moving the paddle

    this.position.x += 5 / deltaTime;
  }
}
