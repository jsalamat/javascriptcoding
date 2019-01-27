/* Stacks */
// functions: push, pop, peek, length
// ------------ palindrome --------------
var letters = []; // this our stack
var word = "";
var rword = "";

const palindrome = (value) => {
	word = value;
	// put letters of word into stack
	for (var i = 0; i < word.length; i++) {
		letters.push(word[i]);
	};
	// pop off the stack in reverse order
	for (var i = 0; i < word.length; i++) {
		rword += letters.pop();
	};

	if (rword === word) {
		console.log(word + " is a palindrome.");
	}
	else {
		console.log(word + " is a not palindrome.");
	};	
}
palindrome("racecar"); // racecar is a palindrome.
palindrome("Pen"); // Pen is a not palindrome.
//---------------------------------------------------
