// Script Execution 
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', notePassword)
let minimumCount = 0;

// Write password to the #password input
function notePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//Password Generator Nested Functions
function generatePassword() {
    let passwordLength = prompt("Please enter the number of characters you want for you new password. Password must have a minimal length of at least 8 characters and no more than 128 characters");

    let lowerCases = confirm("Do you want lowercases in your password?");

    let upperCases = confirm("Do you want uppercases in your password?");

    let numeric = confirm("Do you want numbers in your password?");

    let special = confirm("Do you want special characters in your password?");

// Minimum count for numbers, lowerCases, upperCases and special characters
   

// Special Characters    
    const specialCharacters = "!@#()<>$%^&*";

// Empty minimums for numbers, lowerCases, upperCases & specialCharacters variables

  let minimumLowerCases = "";
  let minimumUpperCases = "";
  let minimumNumeric = "";
  let minimumSpecialCharacters = "";

 // Generator functions
  let functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * (128 - 8 + 1)) + 1);
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * (128 - 8 + 1)) + 1);
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * (128 - 8 + 1))+ 1);
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

// User input validation

  if (numeric === true) {
    minimumNumeric = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

// empty string variable for the for loop below
  let randomPasswordGenerated = "";

  // for loop to generate random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    let randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumeric;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}

