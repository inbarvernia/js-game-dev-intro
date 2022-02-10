export default class InputHandler {

  constructor(paddle) {
    document.addEventListener('keydown', (event) => { // This function listens for a key press
      switch(event.key) { // The KeyboardEvent interface's key read-only property returns the value of the key being pressed; see: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        case "ArrowLeft":
          paddle.moveLeft();
          break;
        case "ArrowRight":
          paddle.moveRight();
          break;
      }
    })

    document.addEventListener('keyup', (event) => { // This function listens for a keyup event, i.e. when a player releases a key; this way we can make it so the paddle only moves while keys are pressed, and stops as soon as they are released
      switch(event.key) {
        case "ArrowLeft":
          if (paddle.speed < 0) { // We added these conditionals to improve on a small glitch; without it, if we were to press one of the arrow keys, then the other while still holding the first down, when we release the first one, there would be a small hiccup to the movement, where the paddle stops for a frame and then continues on its new direction
            paddle.stop();
          }
          break;
        case "ArrowRight":
          if (paddle.speed > 0) {
            paddle.stop();
          }
          break;
      }
    })
  }

}
