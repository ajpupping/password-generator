// Assignment code 

// To do list: 
// create an array for each type of character (lower, upper, special, number) [x]
// create a desiredChars array [x]
// add user selected chars to desiredChars array [ ]
// pick one random element from each charType array [ ]
  // (to ensure we get at least one of each, per challenge requirements)
// select a random element from desiredChars array [ ]
// continue selecting random elements until length requirement is reached [ ]
// if user says no to all options, return error message and start again [ ]

var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var specialChars = ['!"#$%&()*+,-./:;<=>?@[]^_{|}`~'];
var numbers = ['0123456789'];

var desiredChars = [];

function generatePassword() {
  var passwordLength = Number(window.prompt("Enter desired length of password:"));
  passwordLength = parseInt (passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128); {
    return "Please choose a number between 8 and 128.";
  } 

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);