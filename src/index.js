const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d'); // ctx is a common abbreviation for context; the getContext method returns a drawing context, i.e. the way things are rendered on the canvas, such as 2d, or webGL for 3D objects

ctx.clearRect(0, 0, canvas.width, canvas.height); // According to the tutorial, this is necessary to clear the canvas so that shapes don't seem to multiply if you change their coordinates and save, but I have not found that to happen before adding this line - could be a difference between Sandbox Editor and VSCode Live Server
// According to MDN documentation, erasing the whole canvas in this way is commonly used at the start of each frame in an animation  (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)

ctx.fillStyle = '#f00'; // This sets the colour that you want to use to fill a shape; note that it will affect all subsequent shapes, so if you want a shape to be a different colour, you have to reassign it before
ctx.fillRect(20, 20, 100, 50);

ctx.fillStyle = '#00f'; // If this line were commented out, the following shap would also be red
ctx.fillRect(200, 100, 20, 30);
