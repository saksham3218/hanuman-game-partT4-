const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world;
 
var demon,demoni
 function preload(){
    demoni=loadImage("images/Demon45.gif") }


function setup()
{
     createCanvas(1500,700);
  engine=Engine.create();
  world= engine.world;
  star1 = new Star(200,200,100,100)
  star5 = new Star(1347,542,100,100)
  star6 = new Star(676,468,100,100)
  star7 = new Star(100,90,50,50)
  star8 = new Star(939,359,50,50)
  star9 = new Star(106,558,100,100)
  star10 = new Star(1029,540,100,100)
  star11 = new Star(904,651,50,50)
  star2 = new Star(470,100,50,50)
  planet1 = new Planet(300,300,150,150)
  planet4 = new Planet(1289,300,150,150)
  planet5 = new Planet(1116,70,150,150)
  star4 = new Star(601,320,50,50)
  planet2 = new PlanetA(780,150,100,100)
  planet6 = new PlanetA(444,585,100,100)
  hanuman = new Hanuman(500,300,200,150)
  //demon1 = new Demon(1309,73,350,250)
  star3 = new Star(710,50,100,100)
  chain1 = new Chain(star1.body,{x:200,y:120})
  chain2 = new Chain(star2.body,{x:470,y:50})
  chain3 = new Chain(star3.body,{x:710,y:-10})
  chain4 = new Chain(star4.body,{x:601,y:270})
  chain5 = new Chain(star5.body,{x:1347,y:470})
  chain6 = new Chain(star6.body,{x:676,y:390})
  chain7 = new Chain(star7.body,{x:100,y:40})
  chain8 = new Chain(star8.body,{x:939,y:320})
  chain9 = new Chain(star9.body,{x:106,y:524})
  chain10 = new Chain(star10.body,{x:1029,y:520})
  chain11 = new Chain(star11.body,{x:904,y:621})

  demon=createSprite(0,350,100,100)
  demon.addImage(demoni)
 demon.scale=0.3

 
 demon1=createSprite(1500,250,100,100)
  demon1.addImage(demoni)
 demon1.scale=0.3

 demon2=createSprite(0,50,100,100)
  demon2.addImage(demoni)
 demon2.scale=0.3
}


function draw()
{ 
     
background("lightblue");
Engine.update(engine);
text(mouseX+"  "+mouseY,1400,50)

demon.velocityX=3;
 if(demon.x>1500){
demon.x=0
var q=random(0,700)
demon.y = q
 }

 demon2.velocityX=3;
 if(demon2.x>1500){
demon2.x=0
var r=random(0,700)
demon2.y = r
 }

 demon1.velocityX=-3;
 if(demon1.x<0){
   demon1.x=1500
   var p=random(0,700)
   demon1.y = p
    }

star1.deliveryJoker();
star2.deliveryJoker();
star3.deliveryJoker();
star4.deliveryJoker();
star5.deliveryJoker();
star6.deliveryJoker();
star7.deliveryJoker();
star8.deliveryJoker();
star9.deliveryJoker();
star10.deliveryJoker();
//demon1.crazyAilens();
star11.deliveryJoker();
 planet1.jokerAilens();
 planet4.jokerAilens();
 planet5.jokerAilens();
 planet2.jokerAilens();
 planet6.jokerAilens(); 
 hanuman.jokerAilens(); 
  
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
chain6.display();
chain7.display();
chain8.display();
chain9.display();
chain10.display();
chain11.display();
console.log(demon.x)
drawSprites()
if(demon.x==200 && demon.y>0){
chain1.fly();
console.log("here is demon")
}

if(demon.x==470 && demon.y>0){
  chain2.fly();
  console.log("here is demon")
  }

  if(demon.x==710 && demon.y>0){
   chain3.fly();
   console.log("here is demon")
   }

   if(demon.x==601 && demon.y>0){
      chain4.fly();
      console.log("here is demon")
      }

      if(demon.x==1347 && demon.y>0){
         chain5.fly();
         console.log("here is demon")
         }

         if(demon.x==676 && demon.y>0){
            chain6.fly();
            console.log("here is demon")
            }

            if(demon.x==100 && demon.y>0){
               chain7.fly();
               console.log("here is demon")
               }

               if(demon.x==939 && demon.y>0){
                  chain8.fly();
                  console.log("here is demon")
                  }

                  if(demon.x==106 && demon.y>0){
                     chain9.fly();
                     console.log("here is demon")
                     }

                     if(demon.x==1029 && demon.y>0){
                        chain10.fly();
                        console.log("here is demon")
                        }

                        if(demon.x==904 && demon.y>0){
                           chain11.fly();
                           console.log("here is demon")
                           }
console.log(hanuman.body.x)
if(hanuman.body.position.x==demon.x){
console.log("working")


}





}

function makeDemon(){
  
  

}
