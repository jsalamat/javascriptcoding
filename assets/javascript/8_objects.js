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

