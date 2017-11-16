let userName = 'Kash';
// Fill in Name or empty the string for different response

userName ? console.log(`Hello! ${userName}!`) : console.log('Hello!')

let userQuestion = 'Am I a Winner?'

let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is Certain';
    break;
  case 1:
    eightBall = 'It is Decidedly so';
    break;
  case 2:
    eightBall = 'Reply Hazy Try Again';
    break;
  case 3:
    eightBall = 'Cannot Predict Now';
    break;
  case 4:
    eightBall = 'Don&#39;t Count on It';
    break;
  case 5:
    eightBall = 'My Sources Say No';
    break;
  case 6:
    eightBall = 'Outlook Not So Good';
    break;
  case 7:
    eightBall = 'Signs Point to Yes';
    break;
}

userName ? console.log( userName + ' asked: '+ userQuestion) :
console.log('The User asked: ' + userQuestion);
console.log('The Eight Ball answered: ' + eightBall);