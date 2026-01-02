//  Write a program to check whether a character is uppercase or lowercase alphabet. 

let prompt = require('prompt-sync')();  

let character = prompt("Enter a character: ");

if (character.length != 1) {
    console.log("Please enter a single character.");
} else if (character >= 'A' && character <= 'Z') {
    console.log("the character is uppercase.");
} else if (character >= 'a' && character <= 'z') {
    console.log("the character is lowercase.");
} else {
    console.log("Invalid character.");
}