//Object Creation in javascript..

//var x = 0;
//var y = 100;
//var diameter = 50;

var r = 150;
var g = 100;
var b = 200;

var circle = {
 x :0,
 y:100,
 diameter:200
};

function setup(){

createCanvas(400, 400);
}

function draw(){
//background
background(15,254,124);

//ellipse
fill(26);
ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
circle.x = circle.x + 1;
circle.y = circle.y + 1;
}
