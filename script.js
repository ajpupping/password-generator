// Assignment code 

// To do list: 
// create an array for each type of character (lower, upper, special, number) [x]
// create a desiredChars array [x]
// add user selected chars to desiredChars array [X]
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

var useLower = false; 
var useUpper = false; 
var useSpecial = false; 
var useNumber = false; 

function generatePassword() {
  var passwordLength = Number(window.prompt("Enter desired length of password:"));
  passwordLength = parseInt (passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    return "Please choose a number between 8 and 128.";
  }

  useLower = confirm("Should your password include lower case letters?");
  useUpper = confirm("Should your password include upper case letters?");
  useSpecial = confirm("Should your password include special characters?");
  useNumber = confirm("Should your password include numbers?");

  // Testing if variables are working 
  console.log(passwordLength)
  console.log(useLower)
  console.log(useUpper)
  console.log(useSpecial)
  console.log(useNumber)

  if (!useLower && !useUpper && !useSpecial && !useNumber) {
    return "Please choose at least one type of character."
  }

  if (useLower === true) {
    desiredChars = desiredChars.concat(lowerCase)
  }
  if (useUpper === true) {
    desiredChars = desiredChars.concat(upperCase)
  }
  if (useSpecial === true) {
    desiredChars = desiredChars.concat(specialChars)
  }
  if (useNumber === true) {
    desiredChars = desiredChars.concat(numbers)
  }

console.log(desiredChars);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

useLower = false
useUpper = false
useSpecial = false
useNumber = false

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);