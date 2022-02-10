export default class Brick {

  constructor(game, position) {
    this.image = document.getElementById('brick_img');

    this.position = position;

    this.width = 52;
    this.height = 24;

    this.game = game; // Gives other methods in this class access to the game object, so that we can use it to refer to other game objects (paddle and bricks)
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width, this.height
      );
  }

  update(deltaTime) {
    
  }
}
