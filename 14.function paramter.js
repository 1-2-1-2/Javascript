//Function parameter...


function setup () {
createCanvas(600, 400);
}

function draw() {

background(0);

lollipop(100, 100, 50);
lollipop(100, 100, 50);

}


function lollipop (x, y, diameter) {

fill(100, 150, 20);
rect(x-10, y-10, 20, 150);

fill(255, 0, 200);
ellipse(x, y, diameter, diameter);
}