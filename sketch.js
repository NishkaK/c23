//namespacing
var engine,world
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies




function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  var G_options={
    isStatic:true
  }

  ground=Bodies.rectangle(400,380,800,30,G_options)
  World.add(world,ground)
 
  var B_options={
    isStatic:false,
    restitution:1
  }
  ball=Bodies.circle(400,50,30,B_options)
  World.add(world,ball)

}

function draw() {
  Engine.update(engine)
  background(0);  
  rectMode(CENTER)
  fill("green")
  rect(ground.position.x,ground.position.y,800,30)
  

  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}