function setup() {
createCanvas(400,400);
//background
background(250,250,100);
//Here background is created once..
}

function draw(){
//ellipse
noStroke();

//Filling the color in ellipse.
fill(250, 200, 200, 50);

//Setting the coordinates of ellipse..(X,Y,Height,width).
//Here the x- mouseX (as the mouse moves the x direction changes).
//Here the y- mouseY (as the mouse moves the y direction changes).
ellipse(mouseX, mouseY, 25, 25);
}


//As the mouse is pressed this function execute by stopping the draw function.
function mousePressed() {

//Setting up the background..as user click on canvas .
background(250, 250, 100);
}