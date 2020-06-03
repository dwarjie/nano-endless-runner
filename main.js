let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');
let image = new Image();

// player coordinates for animation
let x = 0, y = 40;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Set up canvas
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

// draw something
image.src = './assets/nanonaut.png'; // reference to the image

window.addEventListener('load', start);
function start() {
	window.requestAnimationFrame(loop)
}

function loop() {
	ctx.clearRect(0, 0, 800, 600); 
	ctx.drawImage(image, x, y); // draw the image
	// x += 1;
	window.requestAnimationFrame(loop); // so the loop will not only execute once
}

start();