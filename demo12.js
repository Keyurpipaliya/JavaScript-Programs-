// Write a program to check whether a number is divisible by 5 or not.

let prompt = require('prompt-sync') ();

let number = parseInt(prompt("Enter a number: "));

if (isNaN(number)) {
    console.log("Please Enter a valid Number.");
} else if (number % 5 === 0) {
    console.log("The number is divisible by 5.");
} else {
    console.log("The number is not divisible by 5.");
} 