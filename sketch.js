var Runnerpng, pathpng, path, runner, left_boundary, right_boundary, coin, coinpng, coinscore;
function preload(){
 
  jakepng=loadAnimation("runner1.png", "runner2.png");
  pathpng=loadImage("path.png");
  coinpng=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathpng);
  path.velocityY=5;
  path.y=path.height/30;
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", runnerpng);
  coin=createSprite(200,200,80,90);
  coin.addImage(coinpng);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinpng);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinpng);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  backround("white")
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  
}
  runner.collide(left_boundary);
  runner.collide(right_boundary);
  edges=createEdgeSprites();
  runner.collide(edges[3]);
drawSprites();
}

