// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// declare a variable that contains an array of characters to be used in the password
// declare a user input variable (the length of the password 8-128 characters)
// send the user a prompt asking for the password length, including a description of the criteria
// put the user input variable into an if function

var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
// why a string over array of characters
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = '!@#$%^&*?';
var numbers = '123456789';

// two methods to combine everything to one string: interpolation or concatenation
// this is concatenation
var passwordGeneratorCharacters =
  lowerCaseLetters + upperCaseLetters + specialCharacters + numbers;

// rounding down to ensure we get 0
function randomNumber() {
  return Math.floor(Math.random() * passwordGeneratorCharacters.length);
}

var userPasswordLength;
// assigning the variable to an array
var randomUserPassword = [];

function generateUserPassword(userSelectedLength) {
  // initialization, condition, final expression
  // [i] use this to find the index of your array
  for (var i = 0; i < userSelectedLength; i++) {
    var randomNumberIndex = randomNumber();
    randomUserPassword.push(passwordGeneratorCharacters[randomNumberIndex]);
  }
  // overriding the value that was held to our new joined value
  console.log('hit for loop');
  return (randomUserPassword = randomUserPassword.join(''));
}

function handleUserSubmit(event) {
  event.preventDefault();
  userPasswordLength = document.querySelector('.password-length-value').value;
  document.querySelector('.returned-password-container p').textContent =
    generateUserPassword(userPasswordLength);
  console.log(userPasswordLength);
}

document.querySelector('form').addEventListener('submit', handleUserSubmit);
