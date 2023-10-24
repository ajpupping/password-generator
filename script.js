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

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChars = ['!','"','#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '`', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var desiredChars = [];

var useLower = false; 
var useUpper = false; 
var useSpecial = false; 
var useNumber = false; 

function generatePassword() {

  var randomPassword = ''
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
  console.log('length: ', passwordLength)
  console.log('lowercase: ', useLower)
  console.log('uppercase: ', useUpper)
  console.log('special: ', useSpecial)
  console.log('numbers: ', useNumber)

  if (!useLower && !useUpper && !useSpecial && !useNumber) {
    return "Please choose at least one type of character."
  }

  if (useLower === true) {
    desiredChars = desiredChars.concat(lowerCase);
    }
  if (useUpper === true) {
    desiredChars = desiredChars.concat(upperCase);
  }
  if (useSpecial === true) {
    desiredChars = desiredChars.concat(specialChars);
  }
  if (useNumber === true) {
    desiredChars = desiredChars.concat(numbers);
  }

// Testing if characters are getting added to array  
console.log('desired characters array: ', desiredChars);

for(let i = 0; i < passwordLength; i ++) {
  randomPassword += desiredChars[Math.floor(Math.random() * desiredChars.length)];
} 

return randomPassword

}

// Generates 1 random character from each category
function getLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getSpecial() {
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

console.log('lowercase: ', getLower());
console.log('uppercase: ', getUpper());
console.log('special character: ', getSpecial());
console.log('number: ', getNumber());


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