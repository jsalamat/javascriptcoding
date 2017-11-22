const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    set appetizers(appetizersIn) {
      
    },
    
    get appetizer() {
      
    },
    
    set mains(mainsIn) {
      
    },
    
    get mains() {
      
    },
    
    
    set desserts(dessertsIn) {
      
    },
    
    get desserts() {
      
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      
    };
    this._course[courseName].push(dish);
    // also try using your setter method!
  }
};

