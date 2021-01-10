const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var bg, bgImg;
var hero,heroImg;
var ib1,ib2,ib3,ib4,ib5,ib6,ib7,ib8,ile;
var coin1,coin2,coin3,coin4,coin5,coin6;




function preload(){

  heroImg = loadAnimation("mario-6666-1.gif");
  bgImg = loadImage("mario-6-1.gif.png");
}

function setup(){
  createCanvas(displayWidth-100,displayHeight-400);
  engine = Engine.create();
    world = engine.world;

  ib1 = createSprite(displayWidth/2-550,displayHeight/3+55,190,20);
  ib1.visible = false;
  ib2 = createSprite(displayWidth/2-400,displayHeight/3+55,75,20);
  ib2.visible = false;
  ib3 = createSprite(displayWidth/2-288,displayHeight/3+55,20,20);
  ib3.visible = false;
  ib4 = createSprite(displayWidth/2-188,displayHeight/3+55,140,20);
  ib4.visible = false;
  ib5 = createSprite(displayWidth/2-30,displayHeight/3+55,120,20);
  ib5.visible = false;

  ile = createSprite(10,200,5,400);
  ile.visible = false;

  hero = createSprite(displayWidth/2-500,displayHeight/3+55,30,30);
  hero.addAnimation("move",heroImg);
  hero.scale = 0.15 ;

  coin1 = new Coin (displayWidth/2-450,displayHeight/3-25,10,15);
  coin2 = new Coin (displayWidth/2-440,displayHeight/3-25,10,15);
  coin3 = new Coin (displayWidth/2-430,displayHeight/3-25,10,15);

  coin4 = new Coin (displayWidth/2-230,displayHeight/3-25,10,15);
  coin5 = new Coin (displayWidth/2-220,displayHeight/3-25,10,15);
  coin6 = new Coin (displayWidth/2-210,displayHeight/3-25,10,15);


  
  


  




}

function draw(){
  background(bgImg);

  createEdgeSprites();
  Engine.update(engine);

  if(keyDown("space") && (hero.y>=displayHeight/3-10)){
//console.log(hero.y);
    hero.velocityY = -5;
  }
  hero.velocityY += 0.5;
  if(keyDown(RIGHT_ARROW)){
    hero.velocityX += 0.05;
  }
  if(keyDown(LEFT_ARROW)){
    hero.velocityX += -0.05;
  }

  hero.collide(ile);

  hero.collide(ib1);
  hero.collide(ib2);
  hero.collide(ib3);
  hero.collide(ib4);
  hero.collide(ib5);
  

  hero.debug = false;
  

  coin1.display();
  coin2.display();
  coin3.display();
  coin4.display();
  coin5.display();
  coin6.display();

  drawSprites();
}