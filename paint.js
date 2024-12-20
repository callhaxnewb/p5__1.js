//mouseX,mouseY
let value1 = 255;
let value2 = 255;
let value3 = 255;
let bg=0;
let size=24;
function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  strokeWeight(1);
  stroke(value1, value2, value3);
  noFill()
  // fill(value1, value2, value3);
  circle(mouseX, mouseY, size);
}

function keyPressed() {
  if (key === 'e' || key === 'E') {  
    value1 = 0;
    value2 = 0;
    value3 = 0;
  }
  if (key === 'r' || key === 'R') {
    value1 = 255;
    value2 = 0;
    value3 = 0;
  }
  if (key === 'g' || key === 'G') {
    value1 = 0;
    value2 = 255;
    value3 = 0;
  }
  if (key === 'b' || key === 'B') {
    value1 = 0;
    value2 = 0;
    value3 = 255;
  }
  if (key === 'w' || key === 'W') {
    value1 = 255;
    value2 = 255;
    value3 = 255;
  }
  if (key === '1') {  
    size=size+2;
  }
  if (key === '2') {  
    size=size-2;
  }
}

function mousePressed(){
  background(0);
}