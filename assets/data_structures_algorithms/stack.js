/* Stacks! */

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "Hello World"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop(); 
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}


// Creates a stack
var Stack = function() {
    this.count = 0; // keep track of items in the stack
    this.storage = {}; // empty object
  
    // Adds a value onto the end of the stack
    this.push = function(value) { // this.push add value to end stack and pass in value
        this.storage[this.count] = value; // add value to top of stack
        this.count++; // increment 1 to show adding another item to stack
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) { // if theres nothing on stack
            return undefined;
        }

        this.count--; // decrement when pop
        var result = this.storage[this.count]; // result is last item on stack
        delete this.storage[this.count]; // delete that item
        return result; // return result
    }
    
    this.size = function() {
        return this.count; // return number of items in the stack
    }
    
    // Returns the value at the end of the stack but will not remove it
    this.peek = function() {
        return this.storage[this.count-1]; // index before the final item or last item
    }
}

var myStack = new Stack(); 

myStack.push(1);
myStack.push(2);

// Hello World is not a palindrome.
console.log(myStack.peek()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.peek()); // 1
myStack.push("Hello World");
console.log(myStack.size()); // 2
console.log(myStack.peek()); // Hello World
console.log(myStack.pop()); // Hello World
console.log(myStack.peek()); // 1