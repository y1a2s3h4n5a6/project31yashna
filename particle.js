class particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, this.r=20, options);
        this.color=color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        noStroke();
        fill("pink");
       pop();
    }

}