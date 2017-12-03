//---------------------------------Classes---------------------------------

//------------------Introduction to Classes---------------------------------
//-------------------------------------------------------------------------
// JavaScript is an object-oriented programming (OOP) language 
// we can use to model real-world items. In this lesson, 
// you will learn how to make classes. Classes are a tool that developers 
// use to quickly produce similar objects.

//object sample 
let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}

// We can create a Dog class that serves as a template for creating new Dog objects
// For each new dog, you can provide a value for their name.
// classes are a great way to reduce duplicate code and debugging time.
// Class Sample

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console = Halley
console.log(halley.behavior); // Print behavior value to console = 0
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console = Halley
console.log(halley.behavior); // Print behavior value to console = 1
console.log('--------------------------------------------------------------------------');
//---------------------------------Constructor-----------------------------------------
//-------------------------------------------------------------------------------------

// Although you may see similarities between class and object syntax, 
// there is one important method that sets them apart. 
// It's called the constructor method. JavaScript calls the constructor() method 
// every time it creates a new instance of a class.

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}

// Dog is the name of our class. By convention, we capitalize and CamelCase class names.

// JavaScript will invoke the constructor() method every time 
// we create a new instance of our Dog class.

// This constructor() method accepts one argument, name.

// Inside of the constructor() method, we use the this keyword. 
// In the context of a class, this refers to an instance of that class. 
// In the Dog class, we use this to set the value of the 
// Dog instance's name property to the name argument.

// Under this.name, we create a property called behavior, 
// which will keep track of the number of times a dog misbehaves. 
// The behavior property is always initialized to zero.

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }
}

//---------------------------------Instance-----------------------------------------
//-------------------------------------------------------------------------------------
// An instance is an object that contains the property names and methods of a class,
// but with unique property values.

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'

// We create a new variable named halley that will store an instance of our Dogclass

// We use the new keyword to generate a new instance of the Dog class. 
// The newkeyword calls the constructor(), runs the code inside of it, 
// and then returns the new instance.

// We pass the 'Halley' string to the Dog constructor, 
// which sets the nameproperty to 'Halley'.

// Finally, we log the value saved to the name key in our halley object, 
// which logs 'Halley' to the console.

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// create new Surgeon instance
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//---------------------------------Methods-----------------------------------------
//-------------------------------------------------------------------------------------
// Class method and getter syntax is the same as it is for objects 
// except you can not include commas between methods.

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

// we add getter methods for name and behavior.
// we also prepended our property names with underscores (_name and _behavior)
// which indicate these properties should not be accessed directly
// Under the getters, we add a method named .incrementBehavior()
// When you call .incrementBehavior() on a Dog instance
// it adds 1 to the _behavior property
// ********* Between each of our methods, we did not include commas ***********

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
  	return this._name;
  }

  get department() {
  	return this._department;
  }

  get remainingVacationDays() {
  	return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
  	return this._remainingVacationDays - daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// create new Surgeon instance
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

