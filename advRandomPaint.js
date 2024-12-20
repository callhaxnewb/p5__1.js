//mouseX,mouseY
let value1 = 255;
let value2 = 255;
let value3 = 255;
let bg=0;
let size=24;
let i=0;
let onn=false;
let mode=0;
let circSize=50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  value1=random(255);
  value2=random(255);
  value3=random(255);
  var x=0;
  while(x<=width){
    fill(value1,value2,value3);
    circle(x,height/10,25);
    x=x+50;
  }
  
  noStroke();   
  if (mouseIsPressed){
    if(mode>0){
      strokeWeight(1);
      stroke(255, 255, 255);
      noFill()
      circle(mouseX, mouseY, circSize);
      
    }
    else{
      fill(value1, value2, value3);
      circle(mouseX, mouseY, random(25));
      
    }
  }
  rectMode(CENTER);
  fill(255,0,0);
  stroke(255);
  strokeWeight(5);
  if(mouseX>(width*0.9)-50 && mouseX<(width*0.9)+50 && mouseY>(height*0.5)-50 && mouseY<(height*0.5)+50){
    stroke(255,255,0)
    strokeWeight(5);
  }
  rect(width*0.9,height*0.5,100,100);
  
  
}

function keyPressed() {
  if (key==='1'){
    mode=1-mode;
  } 
  else if (key==='2'){
    circSize++;
  }
  else if (key==='3'){
    circSize--;
  }
}

function mousePressed(){
  if(mouseX>(width*0.9)-50 && mouseX<(width*0.9)+50 && mouseY>(height*0.5)-50 && mouseY<(height*0.5)+50){
    background(0);
  }
}

