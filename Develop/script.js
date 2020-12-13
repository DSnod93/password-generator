// Password Generator Code


// Create variables to store uppercase letters lowercase letters numbers and special characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var specialCharacter = "~!@#$%^&*()_+=";


function userChoice() {
  // Ask user how long do they want their password to be
  var characterLength = parseInt(prompt("Enter a number between 8 and 128"));

  if (characterLength < 8 || characterLength > 128) {
    window.prompt("Value must be between 8 and 128");
  }

  // Ask user if they want uppercase letters lowercase letters numbers and special characters
    var upper = confirm("Would you like to use uppercase letters?"); 
    var lower = confirm("Would you like to use lowercase letters?");
    var enterNumber = confirm("Would you like to use numbers?");
    var specialChar = confirm("Would you like to use special characters?");

    while (!upper && !lower && !enterNumber && !specialChar) {
      alert("Your must select at least one option");
      var upper = confirm("Would you like to use uppercase letters?"); 
      var lower = confirm("Would you like to use lowercase letters?");
      var enterNumber = confirm("Would you like to use numbers?");
      var specialChar = confirm("Would you like to use special characters?");
    }


}

userChoice();



// Generate password
// Put the generated password into the html file

// Prompts user to input number and confirm. Log to console to verify input is stored.



/*
var upper = confirm("Would you like to use uppercase letters?");
var lower = confirm("Would you like to use lowercase letters?");
var enterNumber = confirm("Would you like to use numbers?");
var specialChar = confirm("Would you like to use special characters?");










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
*/