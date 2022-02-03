export default class InputHandler {

  constructor() {
    document.addEventListener('keydown', (event) => { // This function listens for a key press
      // keyCode returns the code (number) for the key pressed; however, it is deprecated, so will look for an alternateive when refactoring
      switch(event.keyCode) {
        case 37: // left arrow key code
          alert('move left');
          break;
        case 39: // right arrow key code
          alert('move right');
          break;
      }
    })
  }

}