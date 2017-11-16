let input = 'Turpentine and turtles';

let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

//compares the input variable's text to the vowels array. Our goal is to find all the vowels in the input string.
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log(input[inputIndex]);
  
  //This will enable us to check the first letter of input against all the vowels items, then the second letter of input against all the vowels items, etc.
  for (let indexVowels = 0; indexVowels < vowels.length; indexVowels++) {
    //console.log(vowels[indexVowels])
    // added .toLowerCase() to if to lowercase the input
    if (input[inputIndex].toLowerCase() === vowels[indexVowels]) {
      // added .toLowerCase() lowercase the push into array
      resultArray.push(input[inputIndex].toLowerCase());
    };
  };
  
  	//This statement belongs in the outer for-loop because we only want to perform this check once for every letter in the original input. The inner for-loop will fire many more times. It will fire 5 times (the length of the vowels array) for each letter in the original input.
    if (input[inputIndex].toLowerCase() === 'e' || input[inputIndex].toLowerCase() === 'u') {
    resultArray.push(input[inputIndex].toLowerCase());
  }
};

console.log(resultArray);
console.log(resultArray.join('').toUpperCase());