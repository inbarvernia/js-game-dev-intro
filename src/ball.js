export default class Ball {

  constructor() {
    this.image = document.getElementById('ball_img');
  }

  draw(ctx) {
    ctx.drawImage(this.image, 10, 10, 16, 16);
  }

}
