// Basic Algorithm
console.log('Reverse a String')
// Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// ----------------------------------------------
console.log('-------------------------------------------------')
console.log('Factorialize a Number')
// Factorialize a Number

function factorialize(num) {
  var factorArray = [];
  var factorTotal = 1;
  for (var i= 1; i < num + 1; i++) {
    factorArray.push(i);
  }
  for (var j = 0; j < factorArray.length; j++){
      factorTotal *= factorArray[j];
  }
  return factorTotal;
}

factorialize(5);

// ----------------------------------------------
console.log('-------------------------------------------------')
console.log('Check for Palindromes')
// Check for Palindromes

function palindrome(str) {
  var newStr = str.replace(/[\W_]/g, '').toLowerCase();
  var flip = newStr.split('').reverse().join('').toLowerCase();
  
  if (newStr === flip) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("fat");

// ----------------------------------------------
console.log('-------------------------------------------------')
console.log('Find the Longest Word in a String')
// Find the Longest Word in a String

function findLongestWord(str) {
  var arrayWords = str.split(" ");
  var singlewords = "";
    for(var i = 0; i < arrayWords.length; i++){      
      if(arrayWords[i].length > singlewords.length){
        singlewords = arrayWords[i];
      }
    }
  return singlewords.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// ----------------------------------------------
console.log('-------------------------------------------------')
console.log('Title Case a Sentence')
// Title Case a Sentence

function titleCase(str) {
   var capitalStrings="";
   var arrayLower = str.toLowerCase().split(" ");
   for (var i = 0; i < arrayLower.length; i++){
     capitalStrings += arrayLower[i].charAt(0).toUpperCase() + arrayLower[i].slice(1) +" ";
   }
  return capitalStrings.trim();
}

titleCase("I'm a liTTle tea pot");

console.log('-------------------------------------------------')
console.log('TITLE')
// TITLE