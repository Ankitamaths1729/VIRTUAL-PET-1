var dog,happyDog;
var database;
var foodS,foodStock;


function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
 // dog = new dog();
 dogSprite=createSprite(250,250,10,10);
 dogSprite.addImage("normal",dog);
 dogSprite.scale=0.5;
 dogSprite.addImage("happy",happyDog);
    database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);
 // dogSprite.changeAnimation(dog);
 if (foodS !== undefined){
  if (keyWentDown(UP_ARROW)){
    console.log(foodS);
   writeStock(foodS);
  dogSprite.changeAnimation("happy",happyDog);

  }
 
  //add styles here
  fill("yellow");
    textSize(20);
   // textFont()
    stroke(10);
    text("Food Stock Remaining :" +foodS,150,50);
    text("{ Press UP_ARROW key to feed Drago milk } ",50,450);
 }
 drawSprites();
}
 function readStock(data){
   foodS=data.val();
   //console.log(foodS);
 }
 function writeStock(x){
   
  if(x<=0){
   x=0;
  }else{
    x=x-1;
  }

   database.ref('/').update({
     Food:x
   })
 }



