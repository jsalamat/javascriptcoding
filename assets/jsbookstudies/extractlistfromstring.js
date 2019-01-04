// Extracting from a String
// extract out the string containing the list of items
// then convert this string into a list
/* 
Before: 
	This is a list of items: cherries, limes, oranges, apples.
After:
	['cheries', 'limes', 'oranges', 'apples']
*/

let sentence = 'This is one sentence. This is a sentence with a list of items: ' + 'cherries, oranges, apples, bananas. That was the list of items.';
let start = sentence.indexOf(':');
let endwrong = sentence.indexOf('.'); // This is wrong
let end = sentence.indexOf('.', start+1);

console.log(start); // 61
console.log(endwrong); // 20
console.log(end); // 97

let listStr = sentence.substring(start+1, end);
console.log(listStr);
// cherries, oranges, apples, bananas

let fruits = listStr.split(',');
console.log(fruits);
//  [" cherries", " oranges", " apples", " bananas"]

// this need to be trim 
fruits.forEach(function(elem, ind, arr) {
	arr[ind] = elem.trim();
});
console.log(fruits);
// ["cherries", "oranges", "apples", "bananas"]

// Simplified Version:
let sentenceb = 'This is one sentence. This is a sentence with a list of items: ' + 'cherries, oranges, apples, bananas. That was the list of items.';
let startb = sentenceb.indexOf(":");
let endb = sentenceb.indexOf(".", startb+1);

let fruitb = sentenceb.substring(startb+1, endb).split(",");
console.log(fruitb);
//  [" cherries", " oranges", " apples", " bananas"]