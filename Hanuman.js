class Hanuman{
    constructor(a,b,c,d){
    var order = {
        isStatic:true
    
    }
    this.hanuman = Bodies.rectangle(a,b,c,d,order)
    World.add(world,this.hanuman)
    this.width = c
    this.height = d
    this.image = loadImage("images/Hanuman.png")
    
    }
    
    
    jokerAilens(){
        this.hanuman.position.x = mouseX
        this.hanuman.position.y = mouseY
    image(this.image,this.hanuman.position.x,this.hanuman.position.y,this.width,this.height)
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }
