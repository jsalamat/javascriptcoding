const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 6;
    case 'Thursday':
      return 5;
    case 'Friday':
      return 4;
    case 'Saturday':
      return 3;
    case 'Sunday':
      return 2;
    default:
      return 'Please select a Day to view hours of sleep!'
  }
};

console.log(getSleepHours('Funday'));
console.log(getSleepHours('Monday'));
console.log(getSleepHours('Tuesday'));
console.log(getSleepHours('Wednesday'));
console.log(getSleepHours('Thursday'));
console.log(getSleepHours('Friday'));
console.log(getSleepHours('Saturday'));
console.log(getSleepHours('Sunday'));


const getActualSleepHour = () => 
  getSleepHours('Monday') + 
	getSleepHours('Tuesday') + 
 	getSleepHours('Wednesday') + 
 	getSleepHours('Thursday') + 
 	getSleepHours('Friday') + 
 	getSleepHours('Saturday') + 
 	getSleepHours('Sunday');
;

console.log('Total Hour in a Week: ' + getActualSleepHour());

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

console.log('Ideal Hours of Sleep: ' + getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHour();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of Sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) +' more hours of sleep than needed');
  } else if (actualSleepHours < idealSleepHours) {
   console.log('You need to get some rest. At least ' + (idealSleepHours - actualSleepHours) + ' hours of sleep!');
  }
};

calculateSleepDebt();