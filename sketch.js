
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ball1,log1,log2,log3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground1=new ground(600,390,1200,10)
	ball1=new ball(40,200)
	log1=new log(305,350,20,70)
	log2=new log(594,350,20,70)
	log3=new log(450,380,260,20)

}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.displayshape();
  ball1.displayshape();
  log1.displayshape();
  log2.displayshape();
  log3.displayshape();
  drawSprites();
 
}

function keyPressed() {

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:95,y:-95})
}
}
