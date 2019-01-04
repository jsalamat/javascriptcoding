// check_exist_nonemptystring.js
// Verify that a variable is defined, is a string , and not empty

// simplest testing to check for nonempty strings
let checker = function(unknownVariable) {
	console.log("-------------------------------------");
	console.log(unknownVariable);
	if (typeof unknownVariable === 'string' && unknownVariable.length > 0) {
		console.log("true")
	} else {
		console.log("It is either undefined or has no string");
	}
	console.log("-------------------------------------");
};
let noString;
let hasString = "Hello World!";
let hasInterger = 1;
let zero = 0;
checker(noString);
checker(hasString);
checker(hasInterger);
checker(zero);