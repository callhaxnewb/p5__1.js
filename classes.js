let bubbles=[];

function setup (){
    createCanvas(screen.width,screen.height);
    // for(let i=0;i<2;i++){
    //     bubbles[i]=new Bubble(i*100+100,200,random(10,100));
    // }
}

// function mouseDragged(){
function mousePressed(){
    b=new Bubble(mouseX,mouseY,random(10,100));
    bubbles.push(b);
    
}
function draw(){
    background(0);
    for(let i=0;i<bubbles.length;i++){
        bubbles[i].move();
        bubbles[i].show();
    }

}

class Bubble{
    constructor(tempx,tempy,tempr){
        this.x=tempx;
        this.y=tempy;
        this.r=tempr;
    }

    move(){
        this.x=this.x+random(-5,5);
        this.y=this.y+random(-5,5);
    }

    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x,this.y,this.r*2);
    }

}