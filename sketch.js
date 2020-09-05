//Create variables here
var food,dogImg,happyDogImg,dog,database,foodStock,foodS
function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300)
  dog.addImage(dogImg)
  dog.scale=0.3
  food=new Food();
  foodStock=database.ref('Food');
  foodStock.on("value",food.readData)
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    foodStock--
    if(foodStock<0){
      foodStock=0;
    }
    food.updateData(foodStock);
    dog.addImage(happyDogImg);
  }
  
  
  
  console.log(foodStock);
  drawSprites();
  fill("orange")
  textSize(20)
  text("Milk Bottles Left : "+foodStock,250,20);
  //add styles here

}



