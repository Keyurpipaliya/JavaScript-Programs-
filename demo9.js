 //Write a program to check a given integer and return true if it is within 10 of 100 or 
//200.

let prompt = require('prompt-sync')();  

let number = parseInt(prompt("Enter a number: "));
if ((Math.abs(100 - number) <= 10) || (Math.abs(200 - number) <= 10)) {
    console.log("Entered number is within 10 of 100 or 200.");
} else {
    console.log("Entered number is not within 10 of 100 or 200.");
}
