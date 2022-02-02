 class Item {
    name = '';    // Cannot be null
    stock = 0;    // All values allowed
    price = 0.0;  // Cannot be negative
 //appropriate getters and setters 
//got help from bilal and internet documentation
	constructor(name) {
		if (!name) name = '';
		this.name = name;
		this.stock = 0;
		this.price = 0.0;
	}

	/**
	 * @param {String} _name
	 */
	set name(_name) {
		if (_name) this.name = _name;
		else this.name = '';
	}
	get name() {
		return this.name;
	}
	/**
	 * @param {Number} _stock
	 */
	set stock(_stock) {
		this.stock = _stock;
	}
	get stock() {
		return this.stock;
	}
	/**
	 * @param {Number} _price
	 */
	set price(_price) {
		 if (_price < 0) return false;
		this.price = _price;
		 return true;
	}
	get price() {
		return this.price;
	}
    
    
   
}
 

module.exports = Item;