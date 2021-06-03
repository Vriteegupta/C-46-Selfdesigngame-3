var fish,fishImg;
var can,canImg,cansGroup;
var seed,seedImg;
var sewage,sewageImg;
var bg,bgImg;
var fishfood,fishfoodImg,foodGroup;
var heart,heartImg;
var score=0;

function preload(){
  bgImg = loadImage("images/water.gif");
  fishImg = loadImage("images/fish2.png");
  sewageImg = loadImage("images/sewage.png");
  canImg = loadImage("images/can.png");
  fishfoodImg= loadImage("images/fishfood1.png");
  heartImg = loadImage("images/heart.png");
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  //bg=createSprite(800,600);
  fish = createSprite(260,600)
  fish.addImage("fish",fishImg);
 fish.scale=0.4;

 sewage = createSprite(80,displayHeight/2);
 sewage.addImage("sewage",sewageImg);

 foodGroup=new Group();
cansGroup= new Group();


 
  
}
function draw(){
  background(bgImg);
  stroke("white");
  fill("white");
  textSize(40);
  text("Score: "+ score,displayWidth-200,displayHeight-700);

  if(keyDown(UP_ARROW)){
    fish.y = fish.y-3;

  }
  if(keyDown(DOWN_ARROW)){
    fish.y = fish.y+3;
  }
  if(keyDown(RIGHT_ARROW)){
    fish.x = fish.x+3;
  }
  if(keyDown(LEFT_ARROW)){
    fish.x = fish.x-3;
  }
  if(foodGroup.isTouching(fish)){
    score+=1;
    foodGroup.remove(fishfoodImg);

    if(cansGroup.isTouching(fish)){
      score-=1;
      cansGroup.remove(canImg);
    }
  }
  spawnCans();
  spawnFood();
  spawnheart();


  drawSprites();
}

function spawnCans(){
if(frameCount%100===0){
  can = createSprite(Math.round(random(0,displayWidth)),Math.round(random(50,displayHeight)));
  can.addImage(canImg)
  can.scale=0.4
  can.lifetime= 700;
  can.velocityX=-2;
 cansGroup.add(can);
}


}

function spawnFood(){
  if(frameCount%100===0){
    fishfood = createSprite(Math.round(random(0,displayWidth)),Math.round(random(50,displayHeight)));
    fishfood.addImage(fishfoodImg)
    fishfood.scale=0.2;
    fishfood.lifetime= 700;
    fishfood.velocityX=-2;
   foodGroup.add(fishfood);
}

}

function spawnheart(){
  if(frameCount%500===0){
    heart = createSprite(Math.round(random(0,displayWidth)),Math.round(random(50,displayHeight)));
    heart.addImage(heartImg)
    heart.scale=0.2;
    heart.lifetime= 700;
    heart.velocityX=-2;
}

}


