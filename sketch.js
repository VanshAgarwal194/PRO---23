const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(300,500,25);
  bob2 = new Bob(350,500,25);
  bob3 = new Bob(400,500,25);
  bob4 = new Bob(450,500,25);
  bob5 = new Bob(500,500,25);
  rope1 = new Rope(bob1.body,{x:300,y:100});
  rope2 = new Rope(bob2.body,{x:350,y:100});
  rope3 = new Rope(bob3.body,{x:400,y:100});
  rope4 = new Rope(bob4.body,{x:450,y:100});
  rope5 = new Rope(bob5.body,{x:500,y:100});
  roof = new Roof(400,100,400,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
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
   roof.display();
 
 
}



