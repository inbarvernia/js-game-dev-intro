const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d'); // ctx is a common abbreviation for context; the getContext method returns a drawing context, i.e. the way things are rendered on the canvas, such as 2d, or webGL for 3D objects

ctx.fillStyle = '#f00'; // This sets the colour that you want to use to fill a shape; note that it will affect all subsequent shapes, so if you want a shape to be a different colour, you have to reassign it before
ctx.fillRect(20, 20, 100, 50);

ctx.fillStyle = '#00f'; // If this line were commented out, the following shap would also be red
ctx.fillRect(200, 100, 20, 30);
