function setup() {
createCanvas(400, 400);
}


function draw() {
 background(0); 
 stroke(255);
 strokeWeight(4);
 noFill();
 if(mouseX > 250 && mouseX <350 && mouseY > 150 && mouseY < 250) {
 
 if(mouseIsPressed) {
 background(0, 255, 0);
 }
 fill(255,24,100);
 }
 rectMode(CENTER);
 rect(300, 200, 100, 100);
}


//Above Programme using boolean variable;
2.

var on = false;

function setup() {
createCanvas(400, 400);
}

function draw() {
if(on) {
background(255, 0,50);
}
else {
 background(0); 
}

 stroke(255);
 strokeWeight(4);
 noFill();
 rectMode(CENTER);
 rect(300, 200, 100, 100);
}

3. 

var on = false;

function setup() {
createCanvas(400, 400);
}

function draw() {
if(on) {
background(255, 0,50);
}
else {
 background(0); 
}

 stroke(255);
 strokeWeight(4);
 noFill();
 rectMode(CENTER);
 rect(300, 200, 100, 100);
}

function mousePressed() {
//on = true;  if mouse is pressed then on becomes equal to true.

//If mouse is pressed in rectangle then on become equla to true. 

  if(mouseX > 250 && mouseX <350 && mouseY > 150 && mouseY < 250) {
  on = true;
  }
 
//Toggleing the state of the background 
 if(on) {
 on =  false;
 }
 else {
 on = true;
 }

//Toggling can also be done as:- 
if(mouseX > 250 && mouseX <350 && mouseY > 150 && mouseY < 250) {
  on = !on;  //Using one line of code.****
  }

}
