class ball{
    constructor(x,y){
    
    var body1={
    isStatic:false,
    friction:0.5,
    density:1.2
    }
    this.body=Bodies.circle(x,y,30,body1)
    this.radius=10;
    World.add(world,this.body)
    
    
    
    }
    displayshape(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("pink")
    ellipseMode(RADIUS)
    strokeWeight(4)
    stroke("pink") 
    ellipse(0,0,this.radius,this.radius)
    pop()
    }
    }