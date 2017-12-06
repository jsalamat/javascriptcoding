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

class VariableName {
	constructor(inputOne, inputTwo) {
	  this.inputOne = inputOne;
	  this.inputTwo = inputTwo;
	}
}

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
// ******EXCEPT YOU CAN NOT INCLUDE COMMAS BETWEEN METHODS

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
  	//Inside of the method, subtract daysOff from the number saved to 
  	//_remainingVacationDays. Set _remainingVacationDays to the result.
  	this._remainingVacationDays -= daysOff;
  }
}



const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//---------------------------------Method Calls--------------------------------------
//-----------------------------------------------------------------------------------
// The syntax for calling methods and getters on an instance is the same 
// as calling them on an object — append the instance with a period, 
// then the property or method name. For methods, you must also 
// include opening and closing parentheses.
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

const halley = new Dog('Halley');

let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console

// Create two new Dog instances, nikko and bradford
// increment the behavior of our nikko instance, but not bradford
// accessing nikko.behavior returns 1 and accessing bradford.behavior returns 0.

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
    //Inside of the method, subtract daysOff from the number saved to 
  	//_remainingVacationDays. Set _remainingVacationDays to the result.
  	this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);

//---------------------------------Inheritance I--------------------------------------
//-----------------------------------------------------------------------------------
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }  

  incrementBehavior() {
    this._behavior++;
  }
}

// Here we create a Cat class. It shares a couple of properties (_name and _behavior) 
// and a method (.incrementBehavior()) with the Dog class from previos exercise
// The Cat class also contains one additional property (_usesLitter)
// that holds a boolean value to indicate whether a cat can use their litter box.

// When multiple classes share properties or methods, they become candidates for 
// inheritance — a tool developers use 
// to decrease the amount of code they need to write.

// With inheritance, you can create a parent class (also known as a superclass) 
// with properties and methods that multiple child classes (also known as subclasses) 
// share. The child classes inherit the properties and methods from their parent class.

class Animal {
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

// the Animal class contains the properties and methods that the 
// Cat and Dog classes share (name, behavior, .incrementBehavior())

//---------------------------------Inheritance II-------------------------------------
//-----------------------------------------------------------------------------------

// The Animal class below contains the shared properties and methods of Cat and Dog

class Animal {
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

// The code below shows the Cat class that will inherit information from the Animal class

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

// create a parent class named HospitalEmployee
// Add a constructor with name as an argument
// the _remainingVacationDays is always set to 20, 
// name is the only input parameter
// In constructor() set the instance's _name to name and _remainingVacationDays to 20
// create getters for your _name and _remainingVacationDays properties
// Inside the getter, return the property's value
// add a method called takeVacationDays
// This method should accept one argument, called daysOff
// Inside the method, subtract daysOff from _remainingVacationDays
// Save the result to _remainingVacationDays

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    return this._remainingVacationDays -= daysOff;
  }
}

//---------------------------------Inheritance III------------------------------------
//-----------------------------------------------------------------------------------
// abstracted the shared properties and methods of our Cat and Dog classes 
// into a parent class called Animal

class Animal {
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

// these shared properties and methods in the parent Animal class
// we can extend them to the subclass, Cat

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

// create a new class named Cat that extends the Animal class
// **extends and super.

// The extends keyword makes methods of animal class available inside the cat class.
// The constructor, called when create new Cat object,
//  accepts two arguments, name and usesLitter.

// The super keyword calls the constructor of the parent class. 
//  super(name) passes the name argument of the Cat class to the constructor of 
// the Animal class. When the Animal constructor runs, 
// it sets this._name = name; for new Cat instances.

// _usesLitter is a new property that is unique to the Cat class
//  so we set it in the Cat constructor.

// Notice, we call super on the first line of our constructor()
//  then set the usesLitter property on the second line
// In a constructor(), you must always call the super method 
// before you can use the this keyword — 
// if you do not, JavaScript will throw a reference error
// To avoid reference errors, it is best practice 
// ******to call super on the first line of subclass constructors.

// create a new Cat instance and call its name with the same syntax 
// as we did with the Dog class:
const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce

// In the example above, we create a new instance the Cat class, named bryceCat
// We pass it 'Bryce' and false for our name and usesLitter arguments
// When we call console.log(bryceCat._name) our program prints, Bryce.

// In the example above, we abandoned best practices by calling 
// our _name property directly. 
// In the next exercise, we'll address this by calling an 
// inherited getter method for our name property.

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
		super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk',  ['Trauma', 'Pediatrics']);

console.log(nurseOlynyk._name);
console.log(nurseOlynyk._certifications);

//---------------------------------Inheritance IV------------------------------------
//-----------------------------------------------------------------------------------
// When we call extends in a class declaration
// all of the parent methods are available to the child class.

// Here we extend our Animal class to a Cat subclass.
class Animal {
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


class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false);

// our Cat class extends Animal. As a result, 
// the Cat class has access to the Animal getters 
// and the .incrementBehavior() method.
// we create a Cat instance named bryceCat
// Because bryceCat has access to the name getter

console.log(bryceCat.name);

// Since the extends keyword brings all of the parent's getters 
// and methods into the child class, bryceCat.name accesses the name getter 
// and returns the value saved to the name property.

bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior
// The correct answer is 1

// The Cat class inherits the _behavior property, behavior getter, 
// and the .incrementBehavior() method from the Animal class.

// When we created the bryceCat instance, the Animal constructor 
// set the _behavior property to zero.

// The first line of code calls the inherited .incrementBehavior() method,
//  which increases the bryceCat _behavior value from zero to one.

// The second line of code calls the behavior getter and 
// logs the value saved to _behavior (1).

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

//---------------------------------Inheritance V-------------------------------------
//-----------------------------------------------------------------------------------
// inherited features, child classes can contain their 
// own properties, getters, setters, and methods.

// we will add a usesLitter getter
// The syntax for creating getters, setters, and methods
// is the same as it is in any other class

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}

// create a usesLitter getter in the Cat class that 
// returns the value saved to _usesLitter

// Compare the Cat class above to the one we created without inheritance:
// decreased the number of lines required to create the Cat class by about half.
//  benefits (time saved, readability, efficiency) of inheritance grow 
// as the number and size of your subclasses increase.
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}

// One benefit is that when you need to change a method or property that 
// multiple classes share, you can change the parent class, instead of each subclass
// create an additional subclass, called Dog

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

// This Dog class has access to the same properties, getters, setters, and methods 
// as the Dog class we made without inheritance, and is a quarter the size.

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  
  get certifications() {
		return this._certifications;
  }
  
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

//---------------------------------Static Methods-------------------------------------
//-----------------------------------------------------------------------------------
// Sometimes you will want a class to have methods 
// that aren't available in individual instances,
// but that you can call directly from the class.

// Take the Date class, for example — you can both 
// create Date instances to represent whatever date you want, 
// and call static methods, like Date.now() which 
// returns the current date, directly from the class. 
// The .now() method is static, so you can call it directly from the class,
//  but not from an instance of the class.

// use the static keyword to create a static method called generateName method
// in our Animal class:

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}

// above, we create a static method called .generateName() that 
// returns a random name when it's called. Because of the static keyword,
//  we can only access .generateName() by appending it to the Animal class.

// call the .generateName() method with the following syntax:
console.log(Animal.generateName()); // returns a name

// You cannot access the .generateName() method 
// from instances of the Animal class or instances of its subclasses (See below)
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError

// The example above will result in an error
// because you cannot call static methods (.generateName()) on an instance (tyson)

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

//---------------------------------Review: Classes-------------------------------------
//-----------------------------------------------------------------------------------

// Classes are templates for objects.

// Javascript calls a constructor method when we create a new instance of a class.

// Inheritance is when we create a parent class with properties 
// and methods that we can extend to child classes.

// We use the extends keyword to create a subclass.

// The super keyword calls the constructor() of a parent class.

// Static methods are called on the class, but not on instances of the class.

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {;
		super(name);
  	this._insurance = insurance;
  }
  
  get insurance() {
    return this._insurance;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.name);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

const doctorOmega = new Doctor('Omega', 'Bullet Club');
console.log(doctorOmega.name);
console.log(doctorOmega.insurance);
doctorOmega.takeVacationDays(19);
console.log(doctorOmega.remainingVacationDays);