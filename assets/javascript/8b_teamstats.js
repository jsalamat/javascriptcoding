const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    
    
    get mains() {
      return this._mains
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    
    
    
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },   
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
    // also try using your setter method!
  },
  
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]; // return a dish from `dishes` by using `randomIndex`
  },

  generateRandomMeal () {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    
    return `Your meal is ${appetizers.name},  ${mains.name}, and ${desserts.name}. The total price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Rib Eye Steak', 24.75);
menu.addDishToCourse('desserts', 'Cheesecake', 3.50);

menu.addDishToCourse('appetizers', 'French Fries', 3.85);
menu.addDishToCourse('mains', 'Swiss Mushroom Hamburger', 9.25);
menu.addDishToCourse('desserts', 'Hot Chocolate Fudge Ice Cream', 2.50);

menu.addDishToCourse('appetizers', 'Quesadila Chips and Spinach Dips', 4.25);
menu.addDishToCourse('mains', 'Baby Back Ribs', 15.50);
menu.addDishToCourse('desserts', 'Peanut Butter Brownie', 3.25);

menu.addDishToCourse('appetizers', 'Beer Battered Onion Rings', 4.75);
menu.addDishToCourse('mains', 'Buffalo Chicken Wrap', 8.95);
menu.addDishToCourse('desserts', 'Chocolate Shake', 3.50);

let meal = menu.generateRandomMeal();
console.log(meal);