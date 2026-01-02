//  Write a program to check whether a number is negative, positive or zero. 

let prompt = require('prompt-sync')();

let number = parseInt(prompt("enter a number: "));

if(isNaN(number)) {
    console.log("Please Enter a valid number.");
} else if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is Zero");
}
