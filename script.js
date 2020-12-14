// Password Generator Code


// Create variables to store uppercase letters lowercase letters numbers and special characters
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

// Variables to verify user selection if they want uppercase letters, lowercase letters, numbers, and special characters
var upperSelection = false;
var lowerSelection = false;
var numberSelection = false;
var specialSelection = false;
var passwordLength = [];
var pw = [];


function generatePassword() {

  // Ask user how long do they want their password to be
  var characterLength = prompt("Enter a number between 8 and 128");
  var passwordLength = [];

  // Verify user input value between 8 and 128
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    var characterLength = window.prompt("What length would you like your password to be? Enter number between 8 and 128");
    if (characterLength === null)
      return;
  }


  else {

    // Ask user if they want uppercase letters, lowercase letters, numbers, and special characters
    /*
    var upperSelection = confirm("Would you like to use uppercase letters?");
    var lowerSelection = confirm("Would you like to use lowercase letters?");
    var number = confirm("Would you like to use numbers?");
    var specialSelection = confirm("Would you like to use special characters?");
    */

    if (confirm("Would you like to use uppercase letters?") === true) {
      upperSelection = true;
       passwordLength = passwordLength.concat(upperCase);
    }

    if (confirm("Would you like to use lowercase letters?") === true) {
      lowerSelection = true;
      passwordLength = passwordLength.concat(lowerCase);
    }

    if (confirm("Would you like to use numbers?") === true) {
      numberSelection = true;
      passwordLength = passwordLength.concat(number);
    }

    if (confirm("Would you like to use special characters?") === true) {
      specialSelection = true;
    passwordLength  = passwordLength.concat(specialCharacter);
    }

    console.log(passwordLength);
    // If user does not select any of the given options
    if (upperSelection === false && lowerSelection === false && numberSelection === false && specialSelection === false) {
      window.alert("You must select at least one option");
    }
  }

  // Generate password

  // The users answers are randomized depending on what they selected
  for (i = 0; i < characterLength; i++) {
    pw.push(passwordLength[Math.floor(Math.random() * passwordLength.length)]);  
  }

  return pw.join("");
}

  


// Put the generated password into the html file


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