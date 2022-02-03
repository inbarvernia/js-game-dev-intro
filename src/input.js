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
  }

}