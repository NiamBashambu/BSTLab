 class Item {
    #name = '';    // Cannot be null
    #stock = 0;    // All values allowed
    #price = 0.0;  // Cannot be negative
 //appropriate getters and setters 
    constructor(name = '') {
       if(!name) name = '';
 
       this.name = name;
       this.stock = 0;
       this.price = 0.0;
    }
    setStock(newStock){
       this.stock = newStock;
    }
    getStock(){
       return this.stock;
    }
    setPrice(newPrice){
       if(this.price < 0){
          return false
       }
       
       this.price = newPrice;
       return true;

    }
    getPrice() {
      if (this.price >=0 ) return this.price;

   }
   
}
 

module.exports = Item;