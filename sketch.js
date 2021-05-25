
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
	box1 = new Box(width/2,630,200,20);
	box2 = new Box(300,580,20,100);
    box3 = new Box(500,580,20,100);
	ground = new Ground(400,650,800,20);
	paper = new Paper (150,580,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  
  
  drawSprites();
 
  
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.07,y:-0.07})
	}
}

