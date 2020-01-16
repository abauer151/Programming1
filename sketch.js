var medkit;
var rapidfire;
var bullet;
var spaceship;
var mx = -100; //medkit x
var my = 0; //medkit y
var rx = 0; //rapidfire x
var ry = 0; //rapidfire y
var bx = -100; //bullet x
var by = 600; //bullet y
var sx = 0; //spaceship x
var sy = 0; //spaceship y 
var bulletTrackerRad = 1;
var SpaceShipSpeed = 10;
//aidans code
var meteor =[meteor, meteor, meteor, meteor, meteor, meteor];
var vert = 0;//vertical 
var horiz = 0;
var meteorHeight = 150;
var meteorWidth = 150;
var wallBuffer = 300;//distance from the canvas that the meteors bounce off of
let rad = 50; // Width of the shape
var buffer = 80;//used to set meteor and tracker at same starting position
var bulletXBuffer = 13;//used to set the bullet and the tracker at the same position
var bulletYBuffer = 30;
let xpos1, ypos1; // Starting position of shape (used for first meteor)
let xpos2, ypos2;//used for 2nd meteor
let xpos3, ypos3;//used for 3rd meteor
let xpos4, ypos4;//used for 4th meteor
let xpos5, ypos5;//used for 5th meteor
let xpos6, ypos6;//used for 6th meteor
let xspeed = 5; // Speed of the shape
let yspeed = 5; // Speed of the shape

var xdirection1 = Math.random();//changes bounce direction
var ydirection1 = Math.random();
var xdirection2 = Math.random();
var ydirection2 = Math.random();
var xdirection3 = Math.random();
var ydirection3 = Math.random();
var xdirection4 = Math.random();
var ydirection4 = Math.random();
var xdirection5 = Math.random();
var ydirection5 = Math.random();
var xdirection6 = Math.random();
var ydirection6 = Math.random();

function preload(){
	// load image
	medkit = loadImage('/health.png');
	rapidfire = loadImage('/rapidFire.png');
	bullet = loadImage('/bullet.png');
	spaceship = loadImage('/Newspaceship.png');
	//aidans code
	meteor = loadImage('/Big Meteor.png');
}
 
function setup(){
	// set canvas size
	createCanvas(800,700);
	background('black');
	rx = width/2;
	sx = width/2;
	sy = height/2;
	//aidans code 
	noStroke();
	frameRate(30);
	ellipseMode(RADIUS);
	// Set the starting position of the shape
	xpos1 = -100;
	ypos1 = -100;
	xpos2 = 1000;
	ypos2 = 300;
	xpos3 = 900;
	ypos3 = -100;
	xpos4 = 0;
	ypos4 = 900;
	xpos5 = 450;
	ypos5 = 900;
	xpos6 = 900;
	ypos6 = 900;
}
 
function draw(){
	// Draws power ups and spaceship
	background(0);
	image(medkit, mx, my);
	image(rapidfire, rx, ry);
	image(bullet, bx, by);
	image(spaceship, sx, sy);
	move();
	//moves spaceship with w,a,s,d
	if (keyIsDown(87)){ //w
		sy = sy - SpaceShipSpeed;
	}
	
	if (keyIsDown(83)){ //s
		sy = sy + SpaceShipSpeed;
	}
	
	if (keyIsDown(65)){ //a
		sx = sx - SpaceShipSpeed;
	}
	
	if (keyIsDown(68)){ //d
		sx = sx + SpaceShipSpeed;
	}
	//moves spaceship with arrows
	if (keyIsDown(38)){ //up
		sy = sy - SpaceShipSpeed;
	}
	
	if (keyIsDown(40)){ //down
		sy = sy + SpaceShipSpeed;
	}
	
	if (keyIsDown(37)){ //left
		sx = sx - SpaceShipSpeed;
	}
	
	if (keyIsDown(39)){ //right
		sx = sx + SpaceShipSpeed;
	}
	
	//aidans code 
	//wall code for first meteor
	xpos1 = xpos1 + xspeed * xdirection1;
	ypos1 = ypos1 + yspeed * ydirection1;
	if (xpos1> width - rad +wallBuffer|| xpos1 < rad-wallBuffer) {
		xdirection1 *= -1.01;	
	}
	if (ypos1> height - rad +wallBuffer || ypos1 < rad-wallBuffer) {
		ydirection1 *= -1.01; //cause meteors to slowly speed up	
	}
	
	//wall code for second meteor
	xpos2 = xpos2 + xspeed * xdirection2;
	ypos2 = ypos2 + yspeed * ydirection2;
	if (xpos2> width - rad +wallBuffer|| xpos2< rad-wallBuffer) {
		xdirection2 *= -1.01;	
	}
	if (ypos2> height - rad +wallBuffer || ypos2< rad-wallBuffer) {
		ydirection2 *= -1.01; //cause meteors to slowly speed up	
	}
	
	//wall code for third meteor
	xpos3 = xpos3 + xspeed * xdirection3;
	ypos3 = ypos3 + yspeed * ydirection3;
	if (xpos3> width - rad +wallBuffer|| xpos3 < rad-wallBuffer) {
		xdirection3 *= -1.01;	
	}
	if (ypos3> height - rad +wallBuffer || ypos3 < rad-wallBuffer) {
		ydirection3 *= -1.01; //cause meteors to slowly speed up	
	}
	
	//wall code for fourth meteor
	xpos4 = xpos4 + xspeed * xdirection4;
	ypos4 = ypos4 + yspeed * ydirection4;
	if (xpos4> width - rad +wallBuffer|| xpos4 < rad-wallBuffer) {
		xdirection4 *= -1.01;	
	}
	if (ypos4> height - rad +wallBuffer || ypos4 < rad-wallBuffer) {
		ydirection4 *= -1.01; //cause meteors to slowly speed up	
	}
	
	//wall code for fifth meteor
	xpos5 = xpos5 + xspeed * xdirection5;
	ypos5 = ypos5 + yspeed * ydirection5;
	if (xpos5> width - rad +wallBuffer|| xpos5 < rad-wallBuffer) {
		xdirection5 *= -1.01;	
	}
	if (ypos5> height - rad +wallBuffer || ypos5 < rad-wallBuffer) {
		ydirection5 *= -1.01; //cause meteors to slowly speed up	
	}
	
	//wall code for sixth meteor
	xpos6 = xpos6 + xspeed * xdirection6;
	ypos6 = ypos6 + yspeed * ydirection6;
	if (xpos6> width - rad +wallBuffer|| xpos6< rad-wallBuffer) {
		xdirection6 *= -1.01;	
	}
	if (ypos6> height - rad +wallBuffer || ypos6< rad-wallBuffer) {
		ydirection6 *= -1.01; //cause meteors to slowly speed up	
	}

  // Draw the trackers and meteor images
	var tracker = [ellipse(xpos1, ypos1, rad, rad),ellipse(xpos2, ypos2, rad, rad),ellipse(xpos3, ypos3, rad, rad),ellipse(xpos4, ypos4, rad, rad),ellipse(xpos5, ypos5, rad, rad),ellipse(xpos6, ypos6, rad, rad)];
	var bulletTracker = ellipse(bx+bulletXBuffer, by+bulletYBuffer,bulletTrackerRad, bulletTrackerRad)
	image(meteor, xpos1-buffer, ypos1-buffer, meteorWidth, meteorHeight );
	//top left meteor
	image(meteor, xpos2-buffer, ypos2-buffer, meteorWidth, meteorHeight );
	//top center meteor
	image(meteor, xpos3-buffer, ypos3-buffer, meteorWidth, meteorHeight );
	//top right meteor
	image(meteor, xpos4-buffer, ypos4-buffer, meteorWidth, meteorHeight );
	//bottom left meteor
	image(meteor, xpos5-buffer, ypos5-buffer, meteorWidth, meteorHeight );
	//bottom center meteor
	image(meteor, xpos6-buffer, ypos6-buffer, meteorWidth, meteorHeight );
	//bottom right meteor
	move();
	
}


function move(){
	// Moves power ups and bullet
	mx = mx + 2;
	my = my + 0;
	rx = rx + 2;
	ry = ry + 0;
	bx = bx + 0;
	by = by - 10;
	
	//changes medkit x when it gets off screen
	if(mx > width+100){
		mx = -100;
	}
	
	//changes rapidfire x when it gets off screen
	if(rx > width+100){
		rx = -100;
	}
	
	//changes bullet x and y when it gets off screen
	if(by < -50){
		by = 600;
		bx = -100;
	}
	
	//stops spaceship from going off screen
	if(sy < 0){
		sy = 0;
		sx = sx;
	}
	
	if(sy > height-30){
		sy = height-30;
		sx = sx;
	}
	
	if(sx < 0){
		sy = sy;
		sx = 0;
	}
	
	if(sx > width-30){
		sy = sy;
		sx = width-30;
	}
	
	//when bullet hits power up, move power up x and y
	if(by === my && bx === mx){
		mx = -100;
	}
}

function keyPressed(){
	//shoot bullet
	if (keyCode === 32){
		by = sy;
		bx = sx;
	}
}

function start(){
	preload();
	setup();
	draw();
	keyPressed();
}
start();