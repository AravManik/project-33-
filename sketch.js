var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count =0;

var particle;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  //line(0, 450, 800, 450);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
  background("pink");
  textSize(20)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
   //  particles[j].display();
  // }

   if (particle!=null)
   {
       particle.display();

       if (particle.body.position.y>750)
       {
         if (particle.body.position.x < 320)
         {
           score = score + 500;
           //text("Score : "+score,20,30);
           particle = null;
           if (count>= 5)
           {
             gameState = "end";
           }
         }
         else if(particle.body.position.x >= 320 && particle.body.position.x <= 560)
         {
          score = score + 200;
          //text("Score : "+score,20,30);
          particle = null;
          if (count>= 5)
          {
            gameState = "end";
          }
         }
         else if(particle.body.position.x > 560 && particle.body.position.x <= 800 )
         {
          score = score + 150;
          //text("Score : "+score,20,30);
          particle = null;
          if (count>= 5)
          {
            gameState = "end";
          }
         }
       }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   
   text("Score : "+score,20,30);
   text("500", 25, 600);
   text("500", 100, 600);
   text("500", 180, 600);
   text("500", 260, 600);
   text("200", 340, 600);
   text("200", 425, 600);
   text("200", 500, 600);
   text("150", 580, 600);
   text("150", 660, 600);
   text("150", 740, 600);


}

function mousePressed()
{
  if(gameState !== "end")
  {
    count++;
    particle = new Particle(mouseX, 10 ,10, 10);
  }
}