const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please select rock, paper, or scissor!');
  }
};

// console.log(getUserChoice('rock'))
// console.log(getUserChoice('paper'))
// console.log(getUserChoice('scissor'))
// getUserChoice('water');

 
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
    }
};

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
    return 'You Won! It a Blow out!';
  } 
  else if (userChoice === computerChoice) {
    return 'The Game is a Tie!';
  } 
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer Won!';
    } else {
      return 'You Won!';
    }
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'The Computer Won!';
    } else {
      return 'You Won!';
    }
  }
	else if (userChoice === 'scissor') {
    if (computerChoice === 'rock') {
      return 'The Computer Won!';
    } else {
      return 'You Won!';
    }
  }
};

const playGame = () => {
  //const userChoice = getUserChoice('rock');
  //const userChoice = getUserChoice('paper');
  const userChoice = getUserChoice('scissor');
  //const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You Threw: ' + userChoice);
  console.log('The Computer Threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();


