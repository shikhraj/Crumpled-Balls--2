const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var ball;
var dustImage, dustbin;
var bgImage;


function preload(){
	dustImage = loadImage("dustbingreen.png");	
	bgImage = loadImage("bg.jpg")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	





	engine = Engine.create();
	world = engine.world;



	dustbin1 = new Dustbin(550,620,200,20);
	dustbin2 = new Dustbin(450,520,20,200);
	dustbin3 = new Dustbin(650,520,20,200);
	dustbin = createSprite(550,530,50,50);
	dustbin.addImage(dustImage, "img");
	dustbin.scale = 0.75;
	ball = new Paper(50,350,60);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}





function draw() {
  rectMode(CENTER);
  background(bgImage);
  


    
	ball.display();
//   dustbin1.display();
//   dustbin2.display();
//   dustbin3.display();
  

  drawSprites();

}

function keyPressed() { 
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:0, y:-0.4})	 
 }
 if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:0, y:0.4})	 
 }
 if (keyCode === LEFT_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:-0.4,y:-0})	 
 }
 if (keyCode === RIGHT_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:0.4,y:-0})	 
 }
 
}



