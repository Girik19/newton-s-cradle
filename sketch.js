
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var bob,rope1,rope2,rope3,rope4,rope5,roof
var world,engine

function preload(){

}

function setup() {
  createCanvas(1600,700);

  engine=Engine.create();
  world=engine.world;

  roof=new Roof(width/2,height/4,width/7,20)

  bobDiameter=40;

  startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
  bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
  

  rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
  rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0)
  rope3=new Rope(bob3.body,roof.body,0,0)
  rope4=new Rope(bob4.body,roof.body,bobDiameter*2,0)
  rope5=new Rope(bob5.body,roof.body,bobDiameter*1,0)

//constraint1={
//bodyA:bob1.body
//bodyB:rope1.body
//point b: {x: -80, y: 0}
  //}

//constraint2={
//bodyA:bob2.body
//bodyB:rope2.body
//point b: {x: -40, y: 0}
  //}

//constraint3={
//bodyA:bob3.body
//bodyB:rope3.body
//point b: {x: 0, y: 0}
  //}

//constraint4={
//bodyA:bob4.body
//bodyB:rope4.body
//point b: {x: 40, y: 0}
  //}

//constraint5={
//bodyA:bob5.body
//bodyB:rope5.body
//point b: {x: 80, y: 0}
  //}
  
  Engine.run(engine)
}
function draw() {

  background(255);  
Engine.update(engine)
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
roof.display();

  //var pendulum1=Constraint.create(constraint1)
	//var pendulum2=Constraint.create(constraint2)
	//var pendulum3=Constraint.create(constraint3)
	//var pendulum4=Constraint.create(constraint4)
	//var pendulum5=Constraint.create(constraint5)

	//World.add(world, pendulum1);
	//World.add(world, pendulum2);
	//World.add(world, pendulum3);
	//World.add(world, pendulum4);
	//World.add(world, pendulum5);
	//*/
	Engine.run(engine);
	//Render.run(render);
  

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  }
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}