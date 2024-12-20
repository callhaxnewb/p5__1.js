//mouseX,mouseY
let circleX;
let circleY;
let r,g,b,a;
function setup(){
  createCanvas(800, 800);
  background(0);
  background(0);

}

function mousePressed(){
    circleX=0

}

function draw() {
    r=random(255);
    g=0;
    b=random(255);
    a=random(255);
    circleX=random(width);
    circleY=random(height);
    noStroke();
    fill(r,g,b,a);
    circle(circleX,circleY,24)
    fill(0,255,0,1);
    circle(circleX,circleY,24)
    circle(circleX,circleY,24)
    circle(circleX,circleY,24)
    circle(circleX,circleY,24)
}