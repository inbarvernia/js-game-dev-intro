class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;

    this.position = {
      x: (gameWidth - this.width) / 2,
      y: gameHeight - this.height - 10 // Placing the paddle 10px up from the bottom of the canvas
    }
  }

  draw(ctx) { // We will use the context variable from index.js as an argument for this function
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
