//* Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
function getPasswordLength() {
  while (true) {
    var lengthOfPassword = prompt("Please enter how many characters you'd like:");


    var numericLength = +lengthOfPassword;

    if (numericLength < 8 || isNaN(numericLength)) {
      alert("The password must have a minimum of 8 characters. Please try again.");
    } else {
      return numericLength;
    }
  }
}


function getUserChoice(message) {
  return confirm(message);
}

function generatePassword() {
  var password = '';

  var passwordLength = getPasswordLength();
  var includeLowercase = getUserChoice("Would you like to include lowercase letters?");
  var includeNumeric = getUserChoice("Would you like to include numeric characters?");
  var includeSpecialChars = getUserChoice("Would you like to include special characters?");

  var availableChars = upperCasedCharacters;

  if (includeLowercase) {
    availableChars = availableChars.concat(lowerCasedCharacters);
  }

  if (includeNumeric) {
    availableChars = availableChars.concat(numericCharacters);
  }

  if (includeSpecialChars) {
    availableChars = availableChars.concat(specialCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}
    //var lowercaseOption = "Would you like your password to include lowercase letters?";
  //  if (confirm(lowercaseOption)== true ) {
   // console.log("user want lowercase letters in password" + lowerCasedCharacters);
   //   password == lowerCasedCharacters;
   // } else {
   //   password == upperCasedCharacters;
   // }
//I WANT TO MAKE THE OK/CANCELL BOX TOO POP UP AFTER THE LEANGHT OF PASSWORD ONE//
//IF ITS OK THE PROGRAM USES BOTH LOWER AND UPPER CASES IF NOT THE PROGRAM GONNA USE ONLY CAPITAL 
//NEXT BOX ABOUT NUMERIC SAME PRINCIPAL
//NEXT BOX ABOUT SPECIAL CHARACTERS SAME PRINCIPAL
//WANT THE PROGRAM TO RUN THE CHOISES OF THE USERS INPUT AND GENERATE RANDOM PASSWORD ON THAT INPUT

//var lowercaseOption = prompt("Would you like your password to include lowercase letters?");
 // if (confirm(lowercaseOption)) {
   // console.log("User wants lowercase letters in the password");
    // Include lowercase characters in the password
   // return lowerCasedCharacters;
 // } else {
  //  console.log("User does not want lowercase letters in the password");
    // Exclude lowercase characters in the password
  //  return upperCasedCharacters;
 // }
//}

// Example usage:
//var passwordLength = getPasswordOptions();
//if (passwordLength) {
  //console.log("The user wants a password of length: " + passwordLength);
  
  // Use passwordLength in further processing if it meets the criteria
//}
// Function to prompt user for password options
//function getPasswordOptions() {
 //var lenghtOfPassword = prompt("Please enter what how many characters you'd like",);
 // if (lenghtOfPassword < 8 )
//    "the password has to have to min 8 characters"
//}


// Function for getting a random element from an array
//function getRandom(arr) {

//console.log (g)
//}

//var allCharacters = upperCasedCharacters + lowerCasedCharacters + numericCharacters +specialCharacters;
// Function to generate password with user input
//function generatePassword() {

//  console.log("you clicked a button!") //this works

//  var password = "";

//  password += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  ///password += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
 // password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
 // password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];


  
 // return  password
//}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);