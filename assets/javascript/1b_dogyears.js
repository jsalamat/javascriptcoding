const myAge = 32;
console.log(myAge);
// Create a variable named myAge
// and set it equal to your age as a number

let earlyYears = 2;
console.log(earlyYears);
// Create a variable named earlyYears
// and save the value 2 to it
// variable will change

earlyYears *= 10.5;
console.log(earlyYears);

let laterYears = myAge - 2;
console.log(laterYears);

laterYears *= 4;
console.log(laterYears);
// Multiply the laterYears variable by 4
// to calculate the number of dog years accounted for
// by your later years

let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
// Add earlyYears and laterYears together
// and store that in a variable named myAgeInDogYears.

let myName = 'KASH';
myName = myName.toLowerCase();
console.log(myName);
// Create a variable called myName 
// and store your name as a string 
// On the next line, use the toLowerCase() method 
// on the myName variable.

console.log(`My name is ${myName}. I am ${myAge} years old in dog years.`);
// Write a console.log statement that 
// displays your name and age in dog years
// Use string interpolation to display the value
// My name is myName. I am myAge years old in dog years.