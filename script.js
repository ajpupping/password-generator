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

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChars = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

desiredChars = []



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