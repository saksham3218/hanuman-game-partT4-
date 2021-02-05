class Star{
constructor(a,b,c,d){
var order = {
 


}
this.body = Bodies.rectangle(a,b,c,d,order)
World.add(world,this.body)
this.width = c
this.height = d
this.image = loadImage("images/Star.png")
}


deliveryJoker(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)


}

















}