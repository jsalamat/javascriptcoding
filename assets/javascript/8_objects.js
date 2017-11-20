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