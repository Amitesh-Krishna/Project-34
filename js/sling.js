class sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        push();
        stroke("white");
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
    }
}