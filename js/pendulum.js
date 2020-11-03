class pendulum {
    constructor(x,y){
        var options = {
            friction: 0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity,
            restitution:1
        }
        this.r = 55;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        ellipseMode(RADIUS);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("grey");
        stroke("red");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}