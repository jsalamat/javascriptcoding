//Iterators
//----------------------------------------------------------------------
//------------- .forEach()---------
// There are three important things to know about the .forEach() method.

// It is an array method. It must be called upon an array.
// Any changes to the iterated array value won't be updated in the original array.
// The return value is undefined.

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function (fruitItem) {
  console.log('I want to eat a ' + fruitItem);
});

//or also be written with arrow function syntax.

fruits.forEach(fruitItem => console.log('I want to eat a ' + fruitItem));

//----------------------------------------------------------------------
//------------- .map()---------
let numbers = [1, 2, 3, 4, 5]; 

let bigNumbers = numbers.map(function(number) {
  return number * 10;
});

//or also be written with arrow function syntax.
let numbersA = [1, 2, 3, 4, 5]; 
let bigNumbersA = numbersA.map(numbers => numbers * 10);

// The syntax for .map() is almost the same as the syntax for .forEach(), with one important change. 
// Notice that directly before the function call, the code reads, let bigNumbers =. This is because
// .map() returns a new array with elements that have been modified by the code in its block. 
// bigNumbers is the new array in which the method will save the values.

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessageA array below
let secretMessageA = animals.map(function(animalCh) {
  return animalCh[0];
});

console.log(secretMessageA.join(''));

//or
let secretMessageAA = animals.map(animal => animal.charAt(0));

console.log(secretMessageAA.join(''));

let bigNumbersB = [100, 200, 300, 400, 500];

// Create the smallNumbersB array below
let smallNumbersB = bigNumbersB.map(function(number) {
	return number / 100;
});

console.log(smallNumbersB);

//or

let smallNumbersBB = bigNumbersB.map(num => num/100);
console.log(smallNumbersBB);

//----------------------------------------------------------------------
//------------- .filter()---------
// .filter() returns a new array. However, .filter() returns certain elements 
// from the original array that evaluate to truthy based 
// on conditions written in the block of the method.

let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

let shortWords = words.filter(function(word) {
  return word.length < 6;
});

//or
let shortWordAs = words.filter(word => word.length < 6);

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(belowNumber => belowNumber < 250);

console.log(smallNumbers);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// Refactor the code above using arrow function syntax
console.log(longFavoriteWords);

//----------------------------------------------------------------------
//------------- Iterator Documentation---------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
let wordsB = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(wordsB.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWordsB = wordsB.filter(fiveletter => fiveletter.length > 5);

console.log(interestingWordsB);
// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWordsB.every(word => word.length > 5 ));

//----------------------------------------------------------------------
//------------- Choose the Right Iterator---------
// There are many iterator methods you can choose. In addition to learning the 
// correct syntax for the use of iterator methods, it is also important to learn 
// how to choose the correct method for different scenarios. 
// The exercises below will give you the opportunity to do just that!

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);