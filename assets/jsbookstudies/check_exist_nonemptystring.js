// check_exist_nonemptystring.js
// Verify that a variable is defined, is a string , and not empty
let noString;
let hasString = "Hello World!";
let hasInterger = 1;
let zero = 0;

// typeof operator returns the type of variable
console.log(typeof noString);
console.log(typeof hasString);
console.log(typeof hasInterger);
console.log(typeof zero);

// simplest testing to check for nonempty strings
let checker = function(unknownVariable) {
	console.log("-------------------------------------");
	console.log(unknownVariable);
	if (typeof unknownVariable === 'string' && unknownVariable.length > 0) {
		console.log("true: defined and has a String")
	} else {
		console.log("It is either undefined or has no string");
	}
	console.log("-------------------------------------");
};

checker(noString);
checker(hasString);
checker(hasInterger);
checker(zero);

// Testing for string, regardless of whether it's a string object or a string literal.
// Test to ensure the variable isn't null
// - typeof test - used to ensure the variable is defined and isn't null
// -  length test - to see whether its a string and not empty
// - valueOF test  - returns a primitive value. So if variable is string object it should return a string literal


let betterChecker = function(unknownVariable) {
	console.log("-------------------------------------");
	console.log(unknownVariable);
	if (((typeof unknownVariable != "undefined" && unknownVariable) && 
		unknownVariable.length > 0) && 
		typeof unknownVariable.valueOf() == "string") {
		console.log("true: defined and has a String")
	} else {
		console.log("It is either undefined or has no string");
	}
	console.log("-------------------------------------");
};

betterChecker(noString);
betterChecker(hasString);
betterChecker(hasInterger);
betterChecker(zero);