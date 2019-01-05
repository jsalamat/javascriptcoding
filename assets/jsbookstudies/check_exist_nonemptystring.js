// check_exist_nonemptystring.js
// Verify that a variable is defined, is a string , and not empty
let noString;
let hasString = "Hello World!";
let hasInterger = 1;
let zero = 0;

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