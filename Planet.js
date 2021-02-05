class Planet{
constructor(a,b,c,d){
var order = {
    isStatic:true

}
this.planet = Bodies.rectangle(a,b,c,d,order)
World.add(world,this.planet)
this.width = c
this.height = d
this.image = loadImage("images/pl.png")

}


jokerAilens(){
image(this.image,this.planet.position.x,this.planet.position.y,this.width,this.height)



}











}