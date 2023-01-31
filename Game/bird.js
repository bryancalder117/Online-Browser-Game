class Bird {
  constructor(x, y, r){
    const options = {
      restitution: 1
    }
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.Body.setMass(this.body, this.body.mass*10);
    Matter.World.add(world, this.body);
    this.r = r;


  }

    show(){
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(birdimg, 0, 0, this.r*3, this.r*3);
      pop();
    }
  }
