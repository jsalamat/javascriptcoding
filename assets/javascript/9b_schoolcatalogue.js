class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  set numberOfStudents(newNumber) {
    if (typeof newNumber === 'number') {
      return this._numberOfStudents = newNumber;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
      return "Invalid input: numberOfStudents must be set to a Number."
    }
  }
  
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    //***So super(name, 'primary', numberOfStudents) will match consturctor of the school.    
//***passing an argument directly to super it places it on the parameter level
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
// Lorraine Hansbury educates 514 students at the primary school level.
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
// generate random teacher from this array
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
//console.log(alSmith.sportsTeams);
// [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]
// [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]
alSmith.sportsTeams;
//  [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]
// console.log(School.pickSubstituteTeacher(["Dr Evil", "Mr Perfect", "Bully Ray"]))


/*
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);// you only get to have one super
    this._pickupPolicy = pickupPolicy;// you only need to declare pickup policy
  }                                   //here.

  get pickupPolicy() {
     return this._pickupPolicy;
  }
}
*/