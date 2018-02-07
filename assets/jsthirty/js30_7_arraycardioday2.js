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
	// B) get current year and see is person is over 19 years old
const isAdult = people.some(function(person) {
	const currentYear = (new Date()).getFullYear();
	if(currentYear - person.year >= 19) {
		return true;
	}
});

console.log(isAdult); // true

console.log('----------------every()----------------------');
// 2. Array.prototype.every() // is everyone 19 or older?

console.log('----------------find()----------------------');
// 3. Array.prototype.find()

console.log('--------------------------------------------');
// 4. Find is like filter, but instead returns just the one you are looking for

console.log('--------------------------------------------');
// 5. find the comment with the ID of 823423

console.log('----------------findIndex()----------------------');
// 6. Array.prototype.findIndex()

console.log('--------------------------------------------');
// 7. Find the comment with this ID

console.log('--------------------------------------------');
// 8. delete the comment with the ID of 823423