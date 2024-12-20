nums=["rainbow","heart","purple","friendship","love"];

let index=0;

function setup(){
    createCanvas(400,400);

}

function draw(){
    background(0);

    fill(255);
    textSize(32);
    text(nums[index],12,200);
}

function mousePressed(){
    index++;
    print(nums[index]);

    if(index>=nums.length){
        index=0;
    }
}

