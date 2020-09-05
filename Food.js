class Food{
    constructor(){
        foodStock=20;    
    }
    readData(){
        database.ref("Food").on("value",function(data){
            foodStock=data.val();
        })
        
    }
    updateData(count){
        database.ref('/').update({
            Food:count
        })
    }
}
