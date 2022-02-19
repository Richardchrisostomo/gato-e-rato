var gato,rato,garden,cat1,cat2,cat3,mouse1,mouse2,mouse3,garden1
function preload() {
cat1=loadAnimation("images/cat1.png");    
cat2=loadAnimation("images/cat2.png","images/cat3.png");
cat3=loadAnimation("images/cat4.png");
mouse1=loadAnimation("images/mouse1.png");
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3=loadAnimation("images/mouse4.png");
garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
garden1=createSprite(width/2-300,height/2);    
gato=createSprite(700,600);
rato=createSprite(100,600);
gato.addAnimation("cat1",cat1)
gato.scale=0.1
rato.addAnimation("mouse1",mouse1);
rato.scale=0.1

garden1.addImage("garden",garden);

}

function draw() {

background(255);
if(rato.isTouching(gato)){
gato.velocityX=0
gato.addAnimation("cat3",cat3);    
gato.changeAnimation("cat3")
rato.addAnimation("mouse3",mouse3);
rato.changeAnimation("mouse3");

}





drawSprites();
}


function keyPressed(){

if(keyDown("up")){ 
rato.addAnimation("mouse2",mouse2);
rato.changeAnimation("mouse2");  
rato.frameDelay = 25;
}
if(keyDown("space")){
    gato.addAnimation("cat2",cat2);
    gato.changeAnimation("cat2")
    gato.velocityX=-3;
    }

}
