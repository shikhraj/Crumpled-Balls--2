class Paper {
  constructor(x, y, radius) {
      var options  ={
          isStatic:false
          
        }

    this.body = Bodies.circle(x, y, radius, options);
    this.radius = 2 * radius;
    this.image = loadImage("paper.png");

    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.radius);

  }
};
