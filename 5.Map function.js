var col = 0;

function setup(){
createCanvas(600,400);
}

function draw(){
col = map(mouseX, 0, 600, 0, 255);
background(col);
fill(51);
ellipse(25, 30, 40, 40);
}

2.
var col = 0;

function setup(){
createCanvas(600,400);
}

function draw(){
col = map(mouseX, 0, 600, 0, 255);
background(col);
fill(51);
ellipse(mouseX, 30, 40, 40);
}

3.
var r = 0;
var b = 0;
function setup(){
createCanvas(600,400);
}

function draw(){
r = map(mouseX, 0, 600, 0, 255);
b = map(mouseX, 0, 600, 255, 0);

background(r, 0, b);
fill(51);
ellipse(25, 30, 40, 40);
}

