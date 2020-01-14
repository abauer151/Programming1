var meteor =[meteor, meteor, meteor, meteor, meteor, meteor];
var vert = 0;//vertical 
var horiz = 0;
var meteorHeight = 150;
var meteorWidth = 150;
var wallBuffer = 300;
let rad = 50; // Width of the shape
var buffer = 50;//used to set meteor and tracker at same starting position
let xpos1, ypos1; // Starting position of shape (used for first meteor)
let xpos2, ypos2;//used for 2nd meteor
let xpos3, ypos3;//used for 3rd meteor
let xpos4, ypos4;//used for 4th meteor
let xpos5, ypos5;//used for 5th meteor
let xpos6, ypos6;//used for 6th meteor
let xspeed = 5; // Speed of the shape
let yspeed = 5; // Speed of the shape

let xdirection1 = 1; //changes bounce direction
let ydirection1 = 1.12;
let xdirection2 = 1.21;
let ydirection2 = 1.6;
let xdirection3 = 1.08;
let ydirection3 = 1.20;
let xdirection4 = 1.17;
let ydirection4 = 1.42;
let xdirection5 = 1.34;
let ydirection5 = 1.17;
let xdirection6 = 1.26;
let ydirection6 = 1.44;

function start(){
	preload();
	setup();
	setTimer(move,20);
	draw();
	
}
function preload(){
	meteor = loadImage('data:image/png;base64,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');

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

function move(){
	
	
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
	move();
	
}
start();

