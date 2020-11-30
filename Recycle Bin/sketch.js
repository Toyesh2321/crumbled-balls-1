var rect1,rect2,rect3
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  rect1 = createSprite(550,657,200,20);
	rect1.shapeColor = color("white");
	rect1.scale = 0.9;

	rect2 = createSprite(640,615,20,100);
	rect2.shapeColor = color("white");
	rect2.scale = 0.9;

	rect3 = createSprite(460,610,20,100);
	rect3.shapeColor = color("white");
	rect3.scale = 0.9;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue")

}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
 
}



