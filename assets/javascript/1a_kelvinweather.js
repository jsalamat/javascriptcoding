// const kelvin = 294;
// console.log(kelvin);
// The forecast today is 294 Kelvin. To start, create a 
// variable named kelvin, and set it equal to 294.

const kelvin = prompt('What is the Kelvin temperature today?');
// Make the Kelvin Weather project more interactive 
// by asking the user what the current Kelvin 
// temperature is through a prompt pop-up window.

const celsius = kelvin - 273;
console.log(celsius);
// let's convert Kelvin to Celsius by subtracting 273 
// from the kelvin variable. Store the result in 
// another variable, named celsius.

let fahrenheit = (celsius * (9/5) + 32);
fahrenheit = Math.floor(fahrenheit);
// Use the .floor() method from the Math library to 
// round the Fahrenheit temperature. 
// Save the result to the fahrenheit variable.
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
// Use string interpolation to replace TEMPERATURE 
// with the value saved to fahrenheit.
// the backticks(`) wrap the string.
// variable is inserted using ${}