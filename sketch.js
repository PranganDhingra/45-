var walking, walkingimage;
var ghost, ghostimage, ghost1,ghost2,ghost3,ghost4,ghost5,ghost6,ghost7,ghost8,ghost9;
var bg, bgimage;
var treasurehuntimg,treasurehunt;
var zombie, zombieimg, zombie1,zombie2,zombie3,zombie4,zombie5,zombie6;
var runninggirl, runninggirlimg;
var runningboy, runningboyimg;
var key, keyimage;
var life, lifeimage;
var door, doorimage;
var map, mapimage;
var score = 0;
var gameState = "choose"; 

function preload() {
  
walkingimage=loadAnimation("walking1.jpeg","walking2.jpeg","walking3.jpeg","walking4.jpeg");
ghostimage=loadAnimation("ghost1.png","ghost2.png","ghost3.png","ghost4.png","ghost5.png","ghost6.png","ghost7.png","ghost8.png","ghost9.png")
bgimage=loadImage("bg.png");
treasurehuntimg=loadAnimation("th1.png","th2.png","th3.png","th4.png","th4.png","th4.png","th4.png");
runninggirlimg=loadAnimation("runninggirl1.png","runninggirl2.png","runninggirl3.png","runninggirl4.png","runninggirl5.png","runninggirl6.png")
runningboyimg=loadAnimation("runningboy1.png","runningboy2.png","runningboy3.png","runningboy4.png");
keyimage=loadAnimation("movingkey1.png","movingkey2.png","movingkey4.png","movingkey5.png","movingkey6.png","movingkey7.png","movingkey8.png");
lifeimage=loadImage("life.png");
doorimage=loadAnimation("od1.png","od2.png");
zombieimg=loadAnimation("z1.png","z2.png","z3.png","z4.png","z5.png","z6.png");
doorimg=loadAnimation("d1.png","d1.png","d2.png","d2.png","d3.png","d3.png","d4.png","d4.png","d5.png","d5.png","d6.png","d6.png")
mapimage=loadImage("map.jpg");
startbutton=loadImage("start.png"); 
restartbutton=loadImage("restart.png");

}


function setup(){
createCanvas(1000,620)

bg= createSprite(0,0);
bg.addImage("back_ground",bgimage);
bg.velocityX=-2
bg.scale=6
bg.visible=false

start = createSprite(85,27,20,20);
start.addImage(startbutton);
start.scale = 2;
//start.visible = false;
start.scale = 0.5;

restart=createSprite(414,313,20,20);
restart.addImage("button",restartbutton);
restart.scale = 2;
//restart.visible = false;
restart.scale = 0.9;

zombie= createSprite(547,386,50,50);
zombie.addAnimation("zombiess",zombieimg);
zombie.addAnimation("falls",ghostimage);
zombie.addAnimation("walk",walkingimage);
zombie.scale=2;
zombie.visible=false

/*door=createSprite(457,102,50,50);
door=addAnimation("doors",doorimg);
//door.scale=2*/

/*walking= createSprite(200,400,50,50);
walking.addAnimation("walk",walkingimage);
walking.scale=2*/

treasurehunt= createSprite(331,295,50,50);
treasurehunt.addAnimation("treasure",treasurehuntimg);
treasurehunt.visible=false

/*ghost= createSprite(55,263,50,50);
ghost.addAnimation("ghost",ghostimage);
ghost.scale=2*/

runninggirl=createSprite(86,518,50,50);
runninggirl.addAnimation("running",runninggirlimg);
runninggirl.scale=0.4

runningboy=createSprite(200,476,50,50);
runningboy.addAnimation("run",runningboyimg);
runningboy.scale=0.4

//runninggirl.visible=false
//runningboy.visible=false

key= createSprite(882,275,50,50);
key.addAnimation("moving",keyimage);
key.scale=0.4
key.velocityX=-2
key.visible=false

life= createSprite(825,133,50,50);
life.addImage("point",lifeimage);
life.scale=0.1
life.velocityX=-2
life.visible=false

door= createSprite(600,476,50,50);
door.addAnimation("doors",doorimg);
door.scale=1
door.visible=false

player=createSprite(206,476,50,50);
player.visible=false

}

function draw(){

//background(0);
playerChoosing();

//if (runninggirl || runningboy.isTouching(ghost)){
    
    //runninggirlimg.changeImage();
    //runningboyimg.changeImage();
    //GameOver.visible=true

    //runninggirl.velocityY=0
    //runningboy.velocityY=0

//}


play();
button();
map();

drawSprites();
}



function playerChoosing(){
    if(gameState === "choose"){
        background(180);
        fill(255);
        textSize(30);
        if (bg.x<0){
bg.x=bg.width/2}
        text("Choose your character:", 20,230); 
        runninggirl.visible=true
    runningboy.visible=true             
    if(mousePressedOver(runninggirl)){
        gameState = "Map"
        player.visible=true
        player.addAnimation("2",runninggirlimg)
        runninggirl.destroy();
        runningboy.destroy();
        bg.visible=true
        player.scale=0.5
        console.log(player.y)
        play()
    }
    if(mousePressedOver(runningboy)){
        gameState = "Map"
        player.addAnimation("2",runningboyimg)
        player.scale=0.5
        runninggirl.destroy();
        runningboy.destroy();
        bg.visible=true
        player.visible=true

console.log(player.y)

}    }}

function map(){
    if(gameState === "Map"){
        background(map);
        button1.visible=true;
    }
    if(mousePressedOver(button1)){
        //gameState = "map"
        button1.destroy(); 
    }
}

function button(){
    if(gameState === "button"){
        //background(map);
        start.visible = true; 
    }
    if(mousePressedOver(start)){
        gameState = "play"
        start.destroy();  
    }
}

function play(){
    
    if(keyIsDown("UP_ARROW") )

        player.velocityY=-10
    
    player.velocityY = player.velocityY+ 0.8
    }

    



/*function spawnobstacles(){
    if(frameCount%200===0){
    
        ghost= createSprite(354,108,50,50);
        ghost.addAnimation("zombie",ghostimage);
        ghost.scale=2
        ghost.velocityX=-7
        
    var rand= Math.round(random(1,2))
    switch(rand){
    case 1 :    ghost.addImage("ghost1.png","ghost2.png","ghost3.png","ghost4.png","ghost5.png","ghost6.png","ghost7.png","ghost8.png","ghost9.png");
    break;
    
    case 2 :    walking.addImage("walking1.jpeg","walking2.jpeg","walking3.jpeg","walking4.jpeg")
    break; 
    
    default: break;
    }
    ghostgroup.add(ghost)
    
    //ghost.debug=true
      ghost.setCollider("circle",0,0,40)
    }
    }*/

    
    