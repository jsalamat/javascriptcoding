//------------------------------------------------------------------------

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