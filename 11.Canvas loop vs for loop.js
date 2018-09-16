var offset = 0;

function setup() {
createCanvas(600, 400);
background(0);
}

function draw() {

for(var x =0; x <= width; x = x + 50) {
fill(150, random(100), random(150));
ellipse(x + offset, 200, 30, 30);      //By adding offset the for loop data will move in (x) 
 }				      //direction or you can also move that data in (y) direction.
offset = offset + 10;
}