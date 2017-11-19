let exampleObject = {
    exampleKey: 'example value'
};

// ------ Accessing Object Properties I
// dot notation - 
console.log(exampleObject.exampleKey);

// To access the properties within an object, 
// we connect the value's name to the key name with a period (.). 
//By using console.log() to print restaurant.entrees, 
// we can see the value of the key entrees.

// -----  Accessing Object Properties II
// bracket notation - 
let exampleObject = {
  color: 'blue'
};

exampleObject['color'];
// Just like with dot notation, we can use 
// opening ([) and closing (]) brackets to access a key.
// we used exampleObject['color']. This syntax uses bracket notation 
// to select the value at the color key from within the exampleObject object.