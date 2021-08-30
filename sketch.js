const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1, bob2, bob3, bob4, bob5;
var bobDiamter = 120;
var rope1, rope2, rope3, rope4, rope5; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(400,75,600,120);
	bob1 = new bob(180,550,100);
	bob2 = new bob(280,550,100);
	bob3 = new bob(380,550,100);
	bob4 = new bob(480,550,100);
	bob5 = new bob(580,550,100);
	rope1 = new rope(bob1.body,ground.body,{x:230,y:75});
	rope2 = new rope(bob2.body,ground.body,{x:330,y:75});
	rope3 = new rope(bob3.body,ground.body,{x:430,y:75});
	rope4 = new rope(bob4.body,ground.body,{x:530,y:75});
	rope5 = new rope(bob5.body,ground.body,{x:630,y:75});
}


function draw() {
  rectMode(CENTER);
  background(220);


  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();
  
  drawSprites();
 
}
 
function keyPressed(){
	if(keyCode === LEFT_ARROW){
	   Matter.Body.applyForce(bob1, bob1.position, 10 );
	   
	}
}



