const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, y;

var biker, rock, rockI, bg;
var bikerI, roadI, playButton, play,bg1

var score = 0;

var gameState = 0;
function preload() {
    // bg = loadImage("road.png")
    bikerI = loadImage("biker.png")
    rockI = loadImage("rock.png")
    playButton = loadImage("play.png")
    bg = loadImage("white.jpg");
}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    
    bg1 = createSprite(1000,400, 50,50)
    bg1.addImage(bg)
    bg1.scale = 100
    
    road = createSprite(600,400,10000,500);
    
    biker = createSprite(100,350,50,50);
    biker.addImage(bikerI)
    biker.scale = 0.25

    

    // play = createSprite(950,400,50,50);
    // play.addImage(playButton)
    // play.scale = 0.5
}

function draw(){
    if(gameState === 0){
        textSize(50)
        text("Press SPACE to start the game!!!", 600, 400)
    }
    if(keyCode === 32){
        gameState = 1;
    }
    if(gameState===1){
        // biker.velocityX = 10
        road.velocityX = 10
        drawSprites();
        if(road.x === 1000){
            road.x = 500
        }
        if(biker.y === 143){
            biker.y = 200
        }
        if(biker.y === 638){
            biker.y = 581
        }
        
    }
    if(frameCount%5 ===0){
        score++;
    }
    if(gameState === 1 && frameCount%80 === 0){
        var ran = Math.floor((Math.random() * 10)+1)
        console.log(ran)
        if(ran === 1){
            y = 160
        }
        if(ran === 2){
            y = 200
        }
        if(ran === 3){
            y = 250
        }
        if(ran === 4){
            y = 300
        }
        if(ran === 5){
            y = 350
        }
        if(ran === 6){
            y = 400
        }
        if(ran === 7){
            y = 450
        }
        if(ran === 8){
            y = 500
        }
        if(ran === 9){
            y = 550
        }
        if(ran === 10){
            y = 600
        }


        rock = createSprite(1700,y,50,50);
        rock.addImage(rockI);
        rock.scale = 0.2
        
        rock.velocityX = -10
    }
    if(gameState === 1){
        fill("black")
        textSize(30)
        text("Use up and down arrow keys!", 700, 80);

        textSize(25)
        text("Score: " + score, 1500, 200) 

        
    }
    if(keyCode === 38){
        biker.y = biker.y - 5
    }
    if(keyCode === 40){
        biker.y = biker.y + 5
    }
    console.log(biker.y)    
    
}





