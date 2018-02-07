    // ## Array Cardio Day 2
    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
 
// Some and Every Checks
console.log('----------------some()----------------------');
// arr.some(callback[, thisArg]) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// 1. Array.prototype.some() // is at least one person 19 or older?
	// A) .some() will use function  to check for every person
	// B) get current year and see is person is over 19 years old return true
/*
const isAdult = people.some(function(person) {
	const currentYear = (new Date()).getFullYear();
	if(currentYear - person.year >= 19) {
		return true;
	}
});
*/
/*
const isAdult = people.some(person => {
	const currentYear = (new Date()).getFullYear();
	if(currentYear - person.year >= 19) {
		return true;
	}
})
*/
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19 );

console.log(isAdult); // true
console.log({isAdult}); // show the name of the vairable and value

console.log('----------------every()----------------------');
// arr.every(callback[, thisArg]) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// 2. Array.prototype.every() // is everyone 19 or older?
	// check if every single person in people array is 19 or older

const allAdult = people.every(function(person) {
	const currentYear = (new Date()).getFullYear();
	if(currentYear - person.year >= 19) {
		return true;
	}
});

console.log(allAdult); // true
console.log({allAdult}); // show the name of the vairable and value

console.log('----------------find()----------------------');
// Array.prototype.find()
// arr.find(callback[, thisArg]) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Find is like filter, but instead returns just the one you are looking for
// 3. find the comment with the ID of 823423
/*
const idComment = comments.find(function(comment){
	if(comment.id === 823423) {
		return true;
	}
})
*/
const idComment = comments.find(comment => comment.id === 823423);

console.log(idComment);

console.log('----------------findIndex()----------------------');
// Array.prototype.findIndex() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// arr.findIndex(callback[, thisArg])
// find something particular in the array 
// 4a. Find the comment with this ID
// 4b. delete the comment with the ID of 823423
/*
const index = comments.findIndex(function(comment){
	if(comment.id === 823423) {
		return true;
	}
})
*/
const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);
console.log('-----two ways to delete: splice or spread-------');
console.table(comments);
//splice
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
/*
comments.splice(index, 1);
console.table(comments);
*/

// spread ...
	// create a new array from updated comments
	// spread the items into new array
	// slice start 0 until index
	// slice start at index + 1 <== at end of index
const newComments = [
	...comments.slice(0, index),
	...comments.slice(index + 1)
];

console.table(newComments);