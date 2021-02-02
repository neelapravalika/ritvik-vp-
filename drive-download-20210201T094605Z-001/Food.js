class Food {
    constructor(){
    this.foodStock=0;
    
   
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

  

   decrementFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
     // var x=80,y=100;
      
    //  rectMode(CENTER);
    //  rect(720,220,70,70);
      
     /* if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          rect(x,y,10,50);
          x=x+30;
        }
      }*/
    }
}