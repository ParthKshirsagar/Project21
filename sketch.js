var bullet, wall;
var weight, speed, thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 50, 3);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200, 200, 50, 200);
  wall.shapeColor = rgb(80, 80, 80);

  weight = random(400, 1500);
  speed = random(55, 90);
  thickness = (random(22, 83));
  wall.width = thickness
}

function draw() {
  background("black");  
  bullet.velocityX = speed;

  if(hasCollided(wall, bullet)){
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  }
  if(damage < 10){
    wall.shapeColor = "green";
  }
  if(damage > 10){
    wall.shapeColor = "red";
  }

  drawSprites();
}

function hasCollided(object1, object2){
  if(object1.x - object2.x < (object2.width + object1.width)/2){
    return true;    
  }
  else{
    return false;
  }


  
}