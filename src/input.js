export default class InputHandler {

  constructor() {
    document.addEventListener('keydown', (event) => {
      alert(event.keyCode); // This function listens for a key press and creates an alert with the code (number) for the key pressed); keyCode is deprecated - will look for an alternateive when refactoring
    })
  }

}