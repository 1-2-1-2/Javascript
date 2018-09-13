var circleX = 0;
var circleY = 0;

var sizeX = 0;
var sizeY = 0;

function setup(){
createCanvas(400,400);
}

function draw(){

background(20, 100, 100);
fill(51);

ellipse(circleX, circleY, sizeX, sizeY);

//circleX= circleX + 1;
//circleY = circleY + 1;

sizeX = sizeX + 1;
sizeY = sizeY + 1;
}
