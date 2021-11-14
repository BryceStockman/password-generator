var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
// why a string over array of characters
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = '!@#$%^&*?';
var numbers = '123456789';

// two methods to combine everything to one string: interpolation or concatenation
// this is concatenation
var passwordGeneratorCharacters = '';
// lowerCaseLetters + upperCaseLetters + specialCharacters + numbers;

// rounding down to ensure we get 0
function randomNumber() {
  return Math.floor(Math.random() * passwordGeneratorCharacters.length);
}

var userPasswordLength;
// assigning the variable to an array
var randomUserPassword = [];

function generateUserPassword(userSelectedLength) {
  function passwordPrompts() {
    var lowerCase = confirm('Would you like lowercase letters?');
    if (lowerCase) {
      // the plus sign adds the new variable to whatever is already there
      passwordGeneratorCharacters += lowerCaseLetters;
    }
    var upperCase = confirm('Would you like uppercase letters?');
    if (upperCase) {
      // the plus sign adds the new variable to whatever is already there
      passwordGeneratorCharacters += upperCaseLetters;
    }
    var specials = confirm('Would you like special characters?');
    if (specials) {
      // the plus sign adds the new variable to whatever is already there
      passwordGeneratorCharacters += specialCharacters;
    }
    var num = confirm('Would you like numbers?');
    if (num) {
      // the plus sign adds the new variable to whatever is already there
      passwordGeneratorCharacters += numbers;
    }
    if (!lowerCase && !upperCase && !specials && !num) {
      alert("You haven't selected any of the password criteria!");
      passwordPrompts();
    }
  }
  // recursion when you declare and call a function within itself
  passwordPrompts();

  console.log(passwordGeneratorCharacters);
  // initialization, condition, final expression
  // [i] use this to find the index of your array
  for (var i = 0; i < userSelectedLength; i++) {
    var randomNumberIndex = randomNumber();
    randomUserPassword.push(passwordGeneratorCharacters[randomNumberIndex]);
  }
  // overriding the value that was held to our new joined value
  return (randomUserPassword = randomUserPassword.join(''));
}

function handleUserSubmit(event) {
  event.preventDefault();
  userPasswordLength = document.querySelector('.password-length-value').value;

  if (userPasswordLength < 7 || userPasswordLength > 128) {
    alert('Not a valid password length');
  } else {
    document.querySelector('.returned-password-container').textContent =
      generateUserPassword(userPasswordLength);
    document.querySelector('.password-length-value').value = '';

    setTimeout(function () {
      var newPassword = confirm('Would you like to generate a new password?');
      if (newPassword) {
        location.reload();
      }
    }, 5000);
  }

  // confirm('Would you like to create a new password?');
  console.log(userPasswordLength);
}

document.querySelector('form').addEventListener('submit', handleUserSubmit);
