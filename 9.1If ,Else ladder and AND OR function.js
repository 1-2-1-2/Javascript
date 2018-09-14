function setup() {
 createCanvas(400,400);
}

function draw() {

 background(0);
 stroke(255);
 strokeWeight(4);
 noFill();

//Remember here the code will execute from top to bottom as Always..but if any one of the condition 
//found to be true the it comes out if if else ladder.

 if(mouseX > 250) {
 rect(200, 200, 100, 50);	
 }
 else if(mouseX > 150) {
 line(0, 0, width, height);
 }
 else if(mouseX > 100) {
 ellipse(200, 200, 100, 50);
 }
 else {
 point(300, 300);
 }
}


var speed = 3;


//OR function example (Modifying Bouncing ball Example)
function setup() 
{
createCanvas(400, 400);
}

function draw() {

background(0);
stroke(255);
strokeWeight(4);
noFill();
ellipse(x, 200, 100, 100);

if(x > width || x < 0) {
speed = speed * -1;
}

/*
if (x <= 0) {
speed = 3;
}
*/

x = x + speed;
}