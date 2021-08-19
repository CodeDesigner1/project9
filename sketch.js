var box;

function setup() {
  createCanvas(400,400);
  background(51);
  box=createSprite(200,200,30,30)
}

function draw() 
{

  if(keyIsDown(RIGHT_ARROW))
  {
    background("blue");  
  }

  if(keyIsDown(LEFT_ARROW))
  {
    background("RED");  
  }

  if(keyIsDown(UP_ARROW))
  {
    background("GREEN");  
  }
  
  if(keyIsDown(DOWN_ARROW))
  {
    background("YELLOW");  
  }

  drawSprites()
}




