let bubble1, bubble2;

function setup() {
  createCanvas(600, 200);
  Bubble = new Bubble;
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    Stroke(200);
    noFill();
    strokeWeight(400);
    ellipse(this.x, this.y, 25, 25, 4);
  }
}