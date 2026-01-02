// . Write a program to check two given integers whether either of them is in the range
// 100 to 200 exclusive or not.

let prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Enter First number: "));
let num2 = parseInt(prompt("Enter second number: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please Enter valid numbers.");
} else if ((num1 > 100 && num1 < 200) || (num2 > 100 && num2 < 200)) {
    console.log("True: At least one number is in the range 100 to 200 exclusive.");
} else {
    console.log("False: Neither number is in the range 100 to 200 exclusive.");
}
