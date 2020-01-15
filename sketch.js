var meteor =[meteor, meteor, meteor, meteor, meteor, meteor];
var meteorHeight = 150;
var meteorWidth = 150;
var wallBuffer = 300;
let rad = 5; // Width of the shape
var buffer = 50;//used to set meteor and tracker at same starting position
let xpos1, ypos1; // Starting position of shape (used for first meteor)
let xpos2, ypos2;//used for 2nd meteor
let xpos3, ypos3;//used for 3rd meteor
let xpos4, ypos4;//used for 4th meteor
let xpos5, ypos5;//used for 5th meteor
let xpos6, ypos6;//used for 6th meteor
let xspeed = 10; // Speed of the shape
let yspeed = 10; // Speed of the shape

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

function start(){
	preload();
	setup();
	draw();
	
}

function preload(){
	meteor = loadImage('big meteor.png');
}
function setup(){
	createCanvas(1000,800);
	background('black');
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
	background(0);//makes background black
	
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
	
	
}
start();