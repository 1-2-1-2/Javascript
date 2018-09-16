function setup() {

createCanvas(600, 400);
}

function draw() {

var x = 0;
var y = 0;
var z = 0;

while(x <= width) {

 background(0);
 fill(100, z, 10);
 ellipse(x,200, 25, 25);
 x = x + 50;
 y = y + 50;
 z = z + 25;
 }

}


//FOR LOOP

function setup() {

createCanvas(600, 400);
 background(0);
}

function draw() {

var x = 0;

while(x <= width) {

 fill(100, 25, 10);
 ellipse(x, 200, 25, 25);
 x = x + 50;
 
}

for(var y=0; y <= width; y = y + 50) {
	fill(255, 100, 0);
	ellipse(y, 300, 25, 25);

}

}