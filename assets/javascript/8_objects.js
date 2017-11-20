let exampleObject = {
    exampleKey: 'example value'
};

// ------ Accessing Object Properties I
// dot notation - 
console.log(exampleObject.exampleKey);

// To access the properties within an object, 
// we connect the value's name to the key name with a period (.)
//By using console.log() to print restaurant.entrees, 
// we can see the value of the key entrees.

// -----  Accessing Object Properties II
// bracket notation - 
let exampleObject = {
  color: 'blue'
};

exampleObject['color'];
// Just like with dot notation, we can use 
// opening ([) and closing (]) brackets to access a key.
// we used exampleObject['color']. This syntax uses bracket notation 
// to select the value at the color key from within the exampleObject object

// -----  Accessing Object Properties III
// One advantage that bracket notation has over dot notation 
// is that you can use variables inside the brackets to select
// the keys of an object

let meal = 'none';
let time = 12;
// We'll use military time for this example, counting hours 0-23.

const restaurantSpecials = {
 breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
 lunch: 'The lunch special is 10% off appetizers',
 none: 'There are no specials currently'
};

if (time < 11) { // 11 am
  meal = 'breakfast';
} else if (time < 17) { // 5 pm
  meal = 'lunch';
}

console.log(restaurantSpecials[meal]);
// The lunch special is 10% off appetizers
// The restaurantSpecials object has three key-value pairs 
// for different specials throughout the day: breakfast, lunch, and none.

// if/else statement sets the meal variable to 'breakfast' or 'lunch' 
// based on the the time. For purposes of this example, we can 
// imagine the time variable getting updated every hour.

// On the last line, we wrote restaurantSpecials[meal]. The meal variable is not 
// a key in the restaurantSpecials object. Because we are using bracket notation, 
// JavaScript looks at the meal variable's value. In this case, meal is set to 
// 'lunch' within the if/else statement because time is equal to 12. Since 
// special equals 'lunch', writing restaurantSpecials[meal] is the same as writing
// restaurantSpecials['lunch'] — the code outputs the lunch special.

// Bracket notation is required to use variables to look up keys within an object. 
// It's not possible to use variables like this with dot notation.

// -----  Adding Properties

const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
}

// add appetizers and desserts keys by writing:

restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta'];
restaurant.desserts = ['Homemade Tiramisu', 'Cannoli'];

// Since appetizers and desserts don't exist in the restaurant object, 
// these lines will create and add the key-value pairs

// -----  Editing Properties
// We can replace the values assigned to appetizers and desserts 
// with new arrays like this:

restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta', 'Caprese Salad'];
restaurant.desserts = ['Homemade Tiramisu', 'Canolli', 'Cheesecake'];

// We used bracket and dot notations to specify which keys we wanted to select.
// Then we set its value to a new array, this time with one more array item inside it.

// -----  Methods
// When objects have key-function pairs, we call the function a method. 
// It looks like this:

const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant: () => {
    return 'Lock the door, flip the open sign. We are closed.'
  }
};

console.log(restaurant.openRestaurant());

console.log(restaurant.closeRestaurant());

// Unlock the door, flip the open sign. We are open for business!
// Lock the door, flip the open sign. We are closed.

// A method is a key inside of an object set to a function for its value.

// ---------------- Methods: ES6
// The new method syntax (see below) doesn't require arrow syntax or a colon (:) 
// with the function keyword.

const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  openRestaurant() {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant() {
    return 'Lock the door, flip the open sign. We are closed.'
  }

  // we change the syntax for the .openRestaurant() and .closeRestaurant() methods. 
  // This syntax, which only requires the name of the method and parentheses, 
  // is best practice for defining methods.

  // ---------------- this. Keyword I
  // create methods that operate on the data inside of the same object

  const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant() {
    if (hasDineInSpecial) {
      return 'Unlock the door, post the special on the board, then flip the open sign.';
    } else {
      return 'Unlock the door, then flip the open sign.';
    }
  }
};

console.log(restaurant.openRestaurant());
// ReferenceError: hasDineInSpecial is not defined

// The error above doesn't work because hasDineInSpecial is out of the 
// .openRestaurant() method's scope.

// To address this scope issue, we can use the this keyword 
// to access properties inside of the same object.

const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: function() {
    if (this.hasDineInSpecial) {
      return 'Unlock the door, post the special on the board, then flip the open sign.'
    } else {
      return 'Unlock the door, then flip the open sign.'
    }
  }
}

console.log(restaurant.openRestaurant());
// Unlock the door, post the special on the board, then flip the open sign.

// The .openRestaurant() method in the example above will return a value. 
// The this keyword refers to the current object, which we use to 
// grab the value saved to hasDineInSpecial.

// this.hasDineInSpecial inside the object is the same as 
// accessing restaurant.hasDineInSpecial outside the object.

let person = {
  name: 'Kash',
  age: 30,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`
  },
  sayGoodbye: function() {
    return 'Goodbye!'
  }
}

console.log(person.sayHello());
// Hello, my name is Kash

// You can connect this to a property within the object to use 
// that property inside of a method. this represents the person object in this case, 
// therefore writing this.name will equal the name key's value.
// Use the following syntax to interpolate the name key into the string.
// `This is how you interpolate a variable like ${myVariable}`

// ---------------- this. Keyword II
let myObj = {
  name: 'Miti',
  sayHello() {
    return `${this.name} says hello!`;
  }
};

// If we call myObj.sayHello(), our method will return 'Miti says hello!'.
// this in the example above is called inside the myObj object, which limits 
// the scope to the properties inside of myObj.

// Let's change that by switching the object calling this:

let yourObj = {
  name: 'Timer'
};

yourObj.sayHello = myObj.sayHello;
// Sets the sayHello method on yourObj to be the sayHello method on yourObj

// If you call yourObj.sayHello(), it will return 'Timer says hello!'. 
// this in the example above is called inside the yourObj object, which limits 
// the scope to the properties inside of yourObj.

// this is a great way to make objects more flexible.
//Under the person object, 
// write another variable named friend and set it equal to an object 
// with one key named name. 
// The value of name should be your friend's name.

let person = {
  name: 'Kash',
  age: 30,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`
  },
  sayGoodbye: function() {
    return 'Goodbye!'
  }
}

let friend = {
  name: 'Will'
};

// Under the friend object, set friend.sayHello equal to person.sayHello.
friend.sayHello = person.sayHello;

// This will add a key named sayHello to the friend object and 
// set it equal to the method inside of person.sayHello. 
// The person.sayHello method uses the this keyword.

console.log(person.sayHello());
//Hello, my name is Kash

console.log(friend.sayHello());
//Hello, my name is Will

// It logged your friend's name instead of yours because 
// the meaning of this changed to the friend object, 
// for which the name key is different.

// ---------------- Getters and Setters I
// Getter and setter methods get and set the properties inside of an object.
// There are a couple of advantages to using these methods for getting 
// and setting properties directly:

// You can check if new data is valid before setting a property.
// You can perform an action on the data while you are getting or setting a property.
// You can control which properties can be set and retrieved.

// To address this change, they would write code that checks 
// if the newly set seatingCapacity value is valid. For example, 
// the method should check if the seatingCapacity field is a number like 150,
//  not the string 'one hundred fifty'. We can write this into a setter method
// as follows:

let restaurant = {
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

// We prepended the property names with underscores (_). Developers use 
// an underscore before a property name to indicate a property or value 
// should not be modified directly by other code. We recommend prepending 
// all properties with an underscore, and creating setters for all attributes 
// you want to access later in your code.

// The set seatingCapacity() setter method accepts newCapacity as a variable. 
// The newCapacity variable holds the new value that we will store in 
// _seatingCapacity.

// Inside of the .seatingCapacity() setter we use a conditional statement
// to check if the newCapacity variable (our new value) is a number.

//If the input value is a number (valid input), then we use this._seatingCapacity
//  to change the value assigned to _seatingCapacity. If it is not valid, 
// then we output a message to the user.

// Use the typeof method in an if statement to check if the input value is a number.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


// ---------------- Getters and Setters II
//We call setter methods the same way we edited properties.

// Sets the _seatingCapacity value to 150

restaurant.seatingCapacity = 150;
// 150 is valid input.150 is valid input.

// we set the _seatingCapacity value to 150. We use the same syntax 
// we would use to set a property that doesn't have a setter method. 
// Since the input (150) is a number, our method will execute the 
// first block in the conditional statement — it changes _seatingCapacity 
// to 150 and logs 150 is a valid input. to the console.



// ---------------- Getters and Setters III
// Once you've set the properties, you need a way to access them. 
// Getters are used to get the property values inside of an object

let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(seatingCapacity) {
      if (typeOf newCapacity === 'number') {
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

// the getter method (get seatingCapacity()) logs something to the console 
// and returns the value saved to _seatingCapacity. We call the getter method
//  the same way we would access a property without a method:

restaurant.seatingCapacity = 150;
const seats = restaurant.seatingCapacity;

// In this example we set the seatingCapacity to 150, then call the 
// getter method using restaurant.seatingCapacity and save the result to 
// a variable called seats. The getter will also log the following line of code
// to the console:

// There are 150 seats at Italian Bistro.

// ----------------- Review

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