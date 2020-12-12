// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var specialCharacter = "~!@#$%^&*()_+=";


  function userChoice() {
// Prompts user to input number and confirm. Log to console to verify input is stored.
var characterLength = parseInt(prompt("Enter a number between 8 and 128"));


    

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
