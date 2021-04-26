
var bgimg
var cat,mouse

function preload() {
//load the images here
bgimg=loadImage("images/garden.png")
cat2img=loadImage("images/cat2.png")
cat3img=loadImage("images/cat3.png")
cat4img=loadImage("images/cat4.png")
mouse1img=loadImage("images/mouse1.png")
mouse2img=loadImage("images/mouse2.png")
mouse3img=loadImage("images/mouse3.png")
mouse4img=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
bg=createSprite(200,260)
bg.addImage(bgimg)
bg.scale=1.1

cat=createSprite(560,500)
cat.addImage(cat3img)
cat.scale=0.2

mouse=createSprite(150,500)
mouse.addImage(mouse1img)
mouse.scale=0.2
}

function draw() {
background(225)
    
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width )/2)
{
    cat.addAnimation("catRunning",cat2img)
    cat.changeAnimation("catRunning");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouse3img",mouse3img)
    mouse.changeAnimation("mouse3img")
    mouse.frameDelay=25;
}

}
