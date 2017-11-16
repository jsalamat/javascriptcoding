let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// .pop() : Use an array method to remove the last string of the array secretMessage
secretMessage.pop();
// console.log(secretMessage);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// .push('wordOne', 'wordTwo') : Use an array method to add the words to and program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');
// console.log(secretMessage);

// array[oldWordIndex] = "newWord"; : Change the word easily to the word right by accessing the index and replacing it.
secretMessage[6] = 'right';
//console.log(secretMessage);

// .shift() : Use an array method to remove the first string of the array.
secretMessage.shift();
// console.log(secretMessage);

// .unshift("newWord") : Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');
// console.log(secretMessage);

// .splice(indexToStart, numberOfIndices, "stringToAdd") : Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(5, 5, 'know');
// console.log(secretMessage);

// array.join(" ") : Log the secret message to the console using the .join() method to print the array as a sentence.
secretMessage.join();
console.log(secretMessage.join(' '));