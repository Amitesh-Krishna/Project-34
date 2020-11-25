const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup(){
	createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;
	//the pendulums
	pendulum1 = new pendulum(136,height-100);
	pendulum2 = new pendulum(246,height-100);
	pendulum3 = new pendulum(356,height-100);
	pendulum4 = new pendulum(466,height-100);
	pendulum5 = new pendulum(576,height-100);
	// the slings
	sling1 = new sling(pendulum1.body,{x:236, y:100});
	sling2 = new sling(pendulum2.body,{x:346, y:100});
	sling3 = new sling(pendulum3.body,{x:456, y:100});
	sling4 = new sling(pendulum4.body,{x:566, y:100});
	sling5 = new sling(pendulum5.body,{x:676, y:100});
	Engine.run(engine);
}

function draw(){
	background(0);
	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();
	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();
}

function mouseDragged(){
	Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}
