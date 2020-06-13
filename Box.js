class Box {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0.5,
          'friction':2,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      fill("red");
      push();
      pop();
      rect(this.x, this.y, this.width, this.height);
    }
  };