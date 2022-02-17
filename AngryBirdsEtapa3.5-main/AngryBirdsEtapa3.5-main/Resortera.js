class Resortera {

constructor (bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.pointB = pointB;
    this.resortera = Constraint.create(options);
    World.add (world, this.resortera)
    this.sling1 = loadImage ("Sprites/sling1.png");
    this.sling2 = loadImage ("Sprites/sling2.png");   
    this.sling3 = loadImage ("Sprites/sling3.png");
}

display(){
    if(this.resortera.bodyA){
    var pointA = this.resortera.bodyA.position;
    var pointB = this.pointB;
    
    push ();
    strokeWeight(10);
    stroke("#54270F");
    line (pointA.x - 20, pointA.y, pointB.x-10, pointB.y);
    line (pointA.x - 20, pointA.y, pointB.x+30, pointB.y-3);
    image (this.sling3, pointA.x-30,pointA.y-10,15,30)
    pop ();

   

    }

    image (this.sling1,200,20)
    image (this.sling2, 170,20)
}

fly(){
    this.resortera.bodyA = null;
  }

}