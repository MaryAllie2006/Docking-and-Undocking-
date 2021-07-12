
var spacecraft,spacecraftImg;
var iss, issImg;
var hasDocked=false;

function preload(){
  spacecraftImg= loadImage("images/spacecraft1.png");
  spacecraftImg1= loadImage("images/spacecraft2.png");
  spacecraftImg2= loadImage("images/spacecraft3.png");
  spacecraftImg3= loadImage("images/spacecraft4.png");

  issImg= loadImage("images/iss.png");
  bg=loadImage("images/spacebg.jpg");

}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  spacecraft= createSprite(300,360,50,20);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale=0.2;

  iss=createSprite(400,180,50,50);
  iss.addImage(issImg);
  iss.scale=0.7;

}

function draw() {
  background(bg);  


  spacecraft.addImage(spacecraftImg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraftImg1);
    spacecraft.y = spacecraft.y-3;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftImg2);
    spacecraft.x = spacecraft.x - 3;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftImg3);
    spacecraft.x = spacecraft.x + 3;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftImg1);
      spacecraft.y = spacecraft.y + 3;

  }
}


  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(20);
    fill("white")
    text("Docking Successful!", 300, 300);
  }
  

  drawSprites();
}