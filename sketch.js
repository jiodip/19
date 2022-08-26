var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg,gjumpImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadAnimation("ghost-standing.png","ghost-jumping.png");
  //gjumpImg = loadAnimation("ghost-jumping.png");

  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  //tower
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  //ghostImg
  ghost=createSprite(300,300)
ghost.addAnimation("stand",ghostImg );
//ghost.addAnimation()
  ghost.scale=0.5
  

  
}

function draw() {
  background(200);
  //tower velocity
  if(tower.y > 600){
      tower.y = 50
    }
  //ghost keydown
  if(keyDown("space")){
    //ghost.changeAnimation("jump",gjumpImg)
    ghost.velocityY=-10
    
  }
  if(keyDown("right")){
ghost.x+=10

  }
  if(keyDown("left")){
    ghost.x-=10
  }

  ghost.velocityY=ghost.velocityY+1
  climberfu()
  drawSprites ()
}

function climberfu()
{
  if(frameCount%400===0){

   door=createSprite(random(100,500),0,50,50)
   door.addImage(doorImg)
   door.velocityY=3
   door.lifetime=200
   climber=createSprite(door.x,50,50,50)
   climber.addImage(climberImg)
   climber.velocityY=3
   climber.lifeTime=200

  }


}















