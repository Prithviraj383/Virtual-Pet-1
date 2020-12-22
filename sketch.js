//Create variables here
var dog,dogImage,happydog,happydogImage,foods,foodstock;
var database;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database=firebase.database();
  foodstock=database.ref('food');
  foodstock.on("value",readStock);

  dog=createSprite(250,400,20,20);
  dog.addImage(dogImage);
  dog.scale=.2;

  happydog=createSprite(250,400,20,20);
  happydog.visible=false;
}


function draw() {  

  background(46, 139, 8);

  stroke("green");
  fill("blue")
  text("Food:"+foods,100,50);

  if(keyCode===UP_ARROW){
    dog.visible=false;
    happydog.addImage(happydogImage);
    happydog.visible=true;
    happydog.scale=.2;
    writeStock(foods);
  }

  drawSprites();
  //add styles here

}
function readStock(data){
  foods=data.val();
}

function writeStock(x){

  database.ref('/').update({
    foods:x
  })
}





