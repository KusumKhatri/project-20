var backGround, bgImg;
var cat, catImg1, catImg2, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg4 = loadImage("images/mouse4.png");
} 

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,630,20,20);
    cat.addImage(catImg1);
    cat.scale = 0.2;

    mouse = createSprite(300,600,20,20);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
    
    if(isTouching(cat, mouse)){
        cat.addImage(catImg4);
        mouse.addImage(mouseImg4);
      }
      else {
       cat.addImage(catImg1);
       mouse.addImage(mouseImg1);
      }

    drawSprites();
}

function isTouching(cat,mouse){
    if (cat.x - mouse.x < mouse.width/2 + cat.width/2 
        && mouse.x - cat.x < mouse.width/2 + cat.width/2
        && cat.y - mouse.y < mouse.height/2 + cat.height/2
        && mouse.y - cat.y < mouse.height/2 + cat.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }
function keyPressed(){

    //For moving and changing animation write code here
      if(keyCode === LEFT_ARROW){
          mouse.addAnimation("mouse_teasing", mouseImg2);
          mouse.changeAnimation("mouse_teasing");

          cat.addAnimation("cat_moving", catImg2);
          cat.changeAnimation("cat_moving");
          cat.velocityX = -2;

          mouse.frameDelay = 25;
          cat.frameDelay = 25;
      }
  }
  