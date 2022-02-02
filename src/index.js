const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d'); // ctx is a common abbreviation for context; the getContext method returns a drawing context, i.e. the way things are rendered on the canvas, such as 2d, or webGL for 3D objects

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600; // declaring these in order to be able to pass them as arguments when constructing the paddle object

ctx.clearRect(0, 0, canvas.width, canvas.height); // According to the tutorial, this is necessary to clear the canvas so that shapes don't seem to multiply if you change their coordinates and save, but I have not found that to happen before adding this line - could be a difference between Sandbox Editor and VSCode Live Server
// According to MDN documentation, erasing the whole canvas in this way is commonly used at the start of each frame in an animation  (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)
