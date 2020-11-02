
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	rope1 = new String(bobObject1.body,roofObject.body,bobDiamiter*2,0)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 rope.diplay()
}



