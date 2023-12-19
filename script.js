// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var passwordLength = 0;
var passwordCharacters = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var numbers = false;
  var special = false;
  var upperCase = false;
  numbers = confirm("Do you want to include numbers?");
  //numeric characters
  if (numbers) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }
  special = confirm("Do you want to include Special characters?");
  if (special) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  //uppercased
  upperCase = confirm("Do you want to include Upper case characters?");
  if (upperCase) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
  }

  //lower case
  lowerCase = confirm("Do you want to include Lower case characters");
  if (lowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }
  console.log(passwordCharacters);
}

// Function for getting a random element from an array
function getRandom(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

// Function to generate password with user input
function generatePassword() {
  passwordCharacters = [];
  var tempPass = "";
  passwordLength = parseInt(
    prompt("Enter the length of the password between 8 and 128 characters")
  );

  if (!isNaN(passwordLength)) {
    if (passwordLength >= 8 && passwordLength <= 128) {
      getPasswordOptions();
      for (i = 0; i< passwordLength; i++) {
        tempPass += getRandom(passwordCharacters);
       
      }
     
    } else {
      alert("invalid length Please try again");
      
    }
  }

  return tempPass;
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
