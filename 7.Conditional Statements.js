function setup(){
createCanvas(600, 400);
}

function draw(){

background(0);

stroke(255);
strokeWeight(4);
noFill();


if(mouseX > 300) {
fill(255, 0, 200);
}

ellipse(300, 200, 100, 100);
}


//Advancement of Prevoius Program


//random function;

var spot ={
x: 100,
y: 50
};

var col ={
r:100,
b:50,
g:40
};

function setup(){
createCanvas(400,400);
}

function draw(){

noStroke();
col.r = random(0,255);
col.b = random(100,250);
col.g = random(50,200);
spot.x = random(0,width);  //Width - width of canvas 
spot.y = random(0,height); //Height - height of canvas

fill(col.r, col.b, col.g);
ellipse(30,40,25,25);
if(mouseX> 250) {
rect(spot.x,spot.y,25,25);
}
}

function mousePressed(){   // If mouse is pressed then change the background color.
col.r = random(0,255);
col.b = random(100,250);
col.g = random(50,200);
background(col.r, col.b, col.b);
}