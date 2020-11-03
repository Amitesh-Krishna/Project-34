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
	//the leftmost
	pendulum1 = new pendulum((width-200)/5,height-100);
	pendulum2 = new pendulum((width-200)/5 *2,height-100);
	pendulum3 = new pendulum((width-200)/5 *3,height-100);
	pendulum4 = new pendulum((width-200)/5 *4,height-100);
	//the rightmost
	pendulum5 = new pendulum((width-200)/5 *5,height-100);
	// the slings
	sling1 = new sling(pendulum1.body,{x:(width-200)/5, y:100});
	sling2 = new sling(pendulum2.body,{x:(width-200)/5 *2, y:100});
	sling3 = new sling(pendulum3.body,{x:(width-200)/5 *3, y:100});
	sling4 = new sling(pendulum4.body,{x:(width-200)/5 *4, y:100});
	sling5 = new sling(pendulum5.body,{x:(width-200)/5 *5, y:100});
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
	console.log("no problem in function reaching");
	Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}