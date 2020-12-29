var bullet;
var speed, weight, thickness, wall;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background("black"); 

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor = color(255, 0, 0);
  }

  if(damage<10){
    wall.shapeColor = color(0, 255, 0);
  }
  }
  //bullet.x = wall.x;

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width/2;
  wallLeftEdge = wall.x - wall.width/2;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  //bullet.x = wall.x;
}

bullet.x = wall.x;

