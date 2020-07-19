var object1,object2;


function setup(){
  createCanvas(400,400)
object1= createSprite(100,100,10,30);
object2=createSprite(300,300,10,30);
object1.shapeColor='blue';
object2.shapeColor='green';

object1.velocityX=3;
object2.velocityX=-4;

}
function draw()
{
  background(0);

  
  if(bounceoff(object1,object2)) {
    object1.shapeColor='red';
  object2.shapeColor='red';
  }
else {
  object1.shapeColor='blue';
  object2.shapeColor='green';
}
  drawSprites();
}
