let raceNumber = Math.floor(Math.random()*1000);
console.log('Runners Race Number: ' + raceNumber);

let registerEarly = true;
console.log('Early Registration: ' + registerEarly);

let runnerAge = 19;
console.log('Runners Age: ' + runnerAge);

// ----different method--------
//let newnumber = 0;
//registerEarly ? newNumber = raceNumber : newNumber = raceNumber + 1000;

if (!registerEarly) {
  raceNumber += 1000;
}
console.log('Runners Registration Number: ' + raceNumber);

if (runnerAge >= 18 && registerEarly) {
  console.log('You will race at 9:30 am. Your Race Number is ' + raceNumber);
} else if (runnerAge >= 18 || registerEarly) {
  console.log('You will race at 11:00 am. Your Race Number is ' + raceNumber);
} else if (runnerAge < 18 && !registerEarly) {
  console.log('You will race at 12:30 pm. Your Race Number is ' + raceNumber);
} else {
  console.log('Check the registration Desk!');
};