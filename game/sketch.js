var meteor;
var vert = 0;
var horiz = 0;
var meteorHeight = 100;
var meteorWidth = 100;
function start(){
	preload();
	setup();
	draw();
}

function preload(){
	meteor = loadImage('/Big Meteor.png');
}

function setup(){
	createCanvas(1800,800);
	background('black');
}
function move(){
	vert = vert + 1;
	horiz = horiz + 1;
}
function draw(){
	background(0);

	image(meteor, horiz, vert, meteorWidth, meteorHeight );
	move();
}
start();
