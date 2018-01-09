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
console.log('TITLE')
// TITLE