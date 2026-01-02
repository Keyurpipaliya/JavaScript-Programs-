// Write a program to input any character and check whether it is alphabet, digit or
//special character.

let prompt = require('prompt-sync') ();

let character = prompt("Enter a character: ");

if (character.length !== 1) {
    console.log("Please Enter a single character.");
} else if (character >= 'A' && character <= 'Z') {
    console.log("The character is an uppercase alphabet.");
} else if (character >= 'a' && character <= 'z') {
    console.log("The character is a lowercase alphabet.");
} else if (character >= '0' && character <= '9') {
    console.log("The character is a digit.");
} else {
    console.log("The character is a special character.");       
}