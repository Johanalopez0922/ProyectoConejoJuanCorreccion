var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
//Mover fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//crear sprite rabbit 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  rabbit.x = World.mouseX;
    
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
// En el código van a existir errores para que podamos identificar las lineas que debemos usar
// Para generar un número random entero usamos las 2 funciones como lo hiciste en la linea 43

// var select_sprites = Math(random(1,3));
// var select_sprites = Math.round(1,3);

  var select_sprites = Math.round(random(1,3));

// Recuerda que estamos usando tres iguales para una comparación estricta  
  if (frameCount % 50 == 0) {
    if (select_sprites === 1) {
       createApples();
      }else if (select_sprites === 2) {
       createOrange();
      }
     else {
      createRed();
    }
   }

   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }
   }
   /*
   Recuerda que usamos % para saber si el resultado entre la división de 2 números es igual a 0
   El signo de división lo usamos en otros escenarios. 
   if (frameCount / 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   }*/
}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
