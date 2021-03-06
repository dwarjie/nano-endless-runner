// CONSTANT
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 680;
const NANONAUT_WIDTH = 181;
const NANONAUT_HEIGHT = 229;
const GROUND_Y = 540;
const NANONAUT_Y_ACCELERATION = 1;
const NANONAUT_JUMP_SPEED = 20;

// controls
const SPACE_KEYCODE = 32;

// SETUP
// this is for the canvas
let canvas = document.querySelector('.canvas');
let c = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// this is for the images/assets
let nanonautImage = new Image();
nanonautImage.src = './assets/nanonaut.png';
let backgroundImage = new Image();
backgroundImage.src = './assets/background.png';

// coordinates for the asset
let nanonautX = 50;
let nanonautY = 40;
let nanonautYSpeed = 0;
let nanonautIsInTheAir = false;
let spaceKeyIsPressed = false;

// setting up the game start and calling the mainLoop
window.addEventListener('keydown', onkeydown);
window.addEventListener('keyup', onkeyup);
window.addEventListener('load', start);
function start() {
	window.requestAnimationFrame(mainLoop);
}

// MAIN LOOP
function mainLoop() {
	update();
	draw();
	window.requestAnimationFrame(mainLoop);
}
// PLAYER INPUT
function onkeydown(event) {
	if (event.keyCode == SPACE_KEYCODE) {
		spaceKeyIsPressed = true;
	}
}

function onkeyup(event) {
	if (event.keyCode == SPACE_KEYCODE) {
		spaceKeyIsPressed = false;
	}
}

// UPDATING
function update() {
	if (spaceKeyIsPressed && !nanonautIsInTheAir) {
		nanonautYSpeed = -NANONAUT_JUMP_SPEED;
		nanonautIsInTheAir = true;
	}

	nanonautY = nanonautY + nanonautYSpeed;
	nanonautYSpeed = nanonautYSpeed + NANONAUT_Y_ACCELERATION;
	// check if the player is in the ground
	if (nanonautY > (GROUND_Y - NANONAUT_HEIGHT)) {
		nanonautY = GROUND_Y - NANONAUT_HEIGHT;
		nanonautYSpeed = 0;
		nanonautIsInTheAir = false;
	}
}

// DRAWING
function draw() {
	// the sky
	c.fillStyle = 'lightSkyBlue';
	c.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	c.drawImage(backgroundImage, 0, -210);
	// the ground
	c.fillStyle = 'ForestGreen';
	c.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40);

	// draw the nanonout
	c.drawImage(nanonautImage, nanonautX, nanonautY);
}