//  Write a program to check whether an age is eligible for voting or not.

let prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter your age: "));

if (isNaN(age)) {
    console.log("Please enter a valid age.");
} else if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}