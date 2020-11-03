class  log{
    constructor(x,y,width,height){
    
    var body1={
    isStatic:true
    
    }
    this.body=Bodies.rectangle(x,y,width,height,body1)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    
    
    }
    displayshape(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("white")
    rectMode(CENTER)
    strokeWeight(4)
    stroke("white") 
    rect(0,0,this.width,this.height)
    pop()
    }
    }