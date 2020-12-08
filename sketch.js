var bg, bgimg;
var ghost, ghostimg, ghostj;
var doorimg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var  door;

function preload(){
  bgimg = loadImage("tower.png")
  ghostimg = loadImage("ghost-standing.png")
  ghostj = loadImage("ghost-jumping.png")
  doorimg = loadImage("door.png")
}
function setup(){
  createCanvas(500,500)
  bg = createSprite(250,250,20,20);
  bg.addImage("tower.png", bgimg);
  bg.velocityY = 2;
  ghost = createSprite(250,290,20,20);
  ghost.addImage("ghost", ghostimg)
  ghost.scale = 0.3;

}

function draw(){
  spawnDoors();
 if(gameState === PLAY){
  ghost.addImage("ghost", ghostimg)
  if(bg.y > 600){
    bg.y = 250;
      }
  if(keyDown("space")){
    ghost.velocityY = -6;
    ghost.addImage("ghost", ghostj)
      }
  ghost.velocityY = ghost.velocityY + 0.5;
  if(keyDown("d") || keyDown(RIGHT_ARROW)){
    ghost.x = ghost.x + 5;
      }
  if(keyDown("a")|| keyDown(LEFT_ARROW)){
    ghost.x = ghost.x + -5;
      }

  if(ghost.isTouching(door)){
    gameState = END;
  }
 }
 else if(gameState === END){
  door.velocityY = 0;
  door.visible = false;

 }
  drawSprites();

}


function spawnDoors(){
  if(frameCount % 100 === 0){
 door = createSprite(50,10,20,20);
 door.velocityY = 3;
 door.scale = 0.8;
 door.addImage("door.png", doorimg)
 door.x = Math.round(random(50,450))
  }
}