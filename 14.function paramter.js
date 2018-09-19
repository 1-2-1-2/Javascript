//Function parameter...


function setup () {
createCanvas(600, 400);
}

function draw() {

background(0);

lollipop(100, 100, 50);
lollipop(400, 80, 120);

}


function lollipop (x, y, diameter) {

fill(100, 150, 20);
rect(x-10, y-10, 20, 150);  //Here the length of reactangle is 20 meter so by x-10,y-10 
			   // we get centre point of rectangle..
fill(255, 0, 200);
ellipse(x, y, diameter, diameter);
}