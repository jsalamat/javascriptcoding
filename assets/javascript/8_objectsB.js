//---------------------------------Properties---------------------------------
//-------------------------------------------------------------------------
// One advantage that bracket notation has over dot notation is that 
// you can use variables inside the brackets to select the keys of an object.

let meal = 'none';
var d = new Date(); // get date now
let time = d.getHours(); // Get the hour (0-23)
console.log(time);
// We'll use military time for this example, counting hours 0-23.

const restaurantSpecials = {
 breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
 lunch: 'The lunch special is 10% off appetizers',
 dinner: '$20 Special Dinner for 2 includes 2 entree and 1 appetizers',
 none: 'There are no specials currently'
};

if (time < 11) { // 11 am
  meal = 'breakfast';
} else if (time < 15) { // 5 pm
  meal = 'lunch';
} else if (time < 17) { // 5 pm
  meal = 'dinner';
}


console.log(restaurantSpecials[meal]);
// The meal variable is not a key in the restaurantSpecials object. 
// Because we are using bracket notation, JavaScript looks at the meal variable's value.
// Bracket notation is required to use variables to look up keys within an object.
// It's not possible to use variables like this with dot notation.
console.log('__________________________________________________________________________');
//---------------------------------Adding Properties---------------------------------
//-------------------------------------------------------------------------

const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
}

console.log(restaurant);

restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta'];
restaurant.desserts = ['Homemade Tiramisu', 'Cannoli'];

console.log(restaurant);

restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta', 'Caprese Salad'];
restaurant.desserts = ['Homemade Tiramisu', 'Canolli', 'Cheesecake'];

console.log(restaurant);

console.log('__________________________________________________________________________');
//---------------------------------Methods---------------------------------
//-------------------------------------------------------------------------

const restaurantB = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurantB: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurantB: () => {
    return 'Lock the door, flip the open sign. We are closed.'
  }
};

console.log(restaurantB.openRestaurantB());
// Unlock the door, flip the open sign. We are open for business!
console.log(restaurantB.closeRestaurantB());
// Lock the door, flip the open sign. We are closed.
console.log('__________________________________________________________________________');
//---------------------------------Methods: ES6---------------------------
//------------------------------------------------------------------------

const restaurantC = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  openRestaurantC() {
    return 'Unlock the ES6 door, flip the open sign. We are open for business!';
  },
  closeRestaurantC() {
    return 'Lock the ES6 door, flip the open sign. We are closed.'
  }
};

console.log(restaurantC.openRestaurantC());
// Unlock the ES6 door, flip the open sign. We are open for business!
console.log(restaurantC.closeRestaurantC());
// Lock the ES6 door, flip the open sign. We are closed.
console.log('__________________________________________________________________________');
//-------------------------- this Keyword I------------------------------
//------------------------------------------------------------------------

const restaurantD = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurantD: function() {

  	 // if (hasDineInSpecial) { - hasDineInSpecial is not defined 
  	 //	because hasDineInSpecial is out of the .openRestaurantD() method's scope.
    if (this.hasDineInSpecial) {
      return 'Unlock the THIS door, post the special on the board, then flip the open sign.'
    } else {
      return 'Unlock the THIS door, then flip the open sign.'
    }
  }
}

// The .openRestaurantD() method in the example above will return a value 
// The this keyword refers to the current object, 
// which we use to grab the value saved to hasDineInSpecial
// this.hasDineInSpecial inside the object is the same as 
// accessing restaurantD.hasDineInSpecial outside the object

console.log(restaurantD.openRestaurantD());
// Unlock the THIS door, post the special on the board, then flip the open sign.
console.log('__________________________________________________________________________');
//-------------------------- this Keyword II-----------------------------
//------------------------------------------------------------------------

let myObj = {
  name: 'Miti',
  sayHello() {
    return `${this.name} says hello!`;
  }
};

let yourObj = {
  name: 'Timer'
};

yourObj.sayHello = myObj.sayHello;
// Sets the sayHello method on yourObj to be the sayHello method on yourObj

console.log(myObj.sayHello());
// Miti says hello!
console.log(yourObj.sayHello());
// Timer says hello!
console.log('__________________________________________________________________________');
//--------------------------Getters and Setters I-------------------------
//------------------------------------------------------------------------

let restaurantE = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      console.log(`${newCapacity} is valid input.`);
    } else {
        console.log(`Change ${newCapacity} to a number.`)
    }
  }
}


console.log('__________________________________________________________________________');
//--------------------------Getters and Setters II------------------------
//------------------------------------------------------------------------

restaurantE.seatingCapacity = 'One hundred';
// Change One hundred to a number.
restaurantE.seatingCapacity = '100';
// Change 100 to a number.

// remember to remove quotes because it makes it a string
restaurantE.seatingCapacity = 100;
// 100 is valid input.

console.log('__________________________________________________________________________');
//--------------------------Getters and Setters III-----------------------
//------------------------------------------------------------------------

let restaurantF = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
    } else {
        console.log(`Change ${newCapacity} to a number.`)
    }
  },

  get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
  }
}

restaurantF.seatingCapacity = 150;
const seats = restaurantF.seatingCapacity;
// There are 150 seats at Italian Bistro.
console.log('__________________________________________________________________________');
//--------------------------Overview--------------------------------------
//------------------------------------------------------------------------

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
      console.log(`${ageIn} is valid input.`)
    } else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old`);
    return this._age;
  }

};

person.age = 'Thirty-nine'
//Invalid input

person.age = 39;
//39 is valid input

console.log(person.age);
//39