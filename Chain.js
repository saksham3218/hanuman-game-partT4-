class Chain{
    constructor(x,y){
    var options = {
        bodyA:x,
        pointB:y,
        stiffness:0.5
    }  
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }


    fly(){
        this.body.bodyA = null;
        console.log("arnav")
    }


    
    display(){
        if(this.body.bodyA){
       var pointA = this.body.bodyA.position
       var pointB = this.body.pointB
        stroke("yellow")
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }

}
