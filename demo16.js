 // Write a program to show menu to do math operations. Accept operators (+, -, /, *,
// %) and two values and do operation as per user choice. 

let prompt = require('prompt-sync')(); 

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
let operator = prompt("Enter operator (+, -, *, /, %): ");

if (isNaN(a) || isNaN(b)) {
    console.log("Please enter valid numbers.");
} else if ( operator === '+') {
    console.log("The sum is: " + (a + b)); 
} else if (operator === '-') {
    console.log("The difference is: " + (a - b));
} else if (operator === '*') {
    console.log("The product is: " + (a * b));
} else if (operator === '/') {
    console.log("The quotient is: " + (a / b)); 
} else if (operator === '%') {
    console.log("The remainder is: " + (a % b));
} else {
    console.log("Invalid operator. please enter one of the following: +, -, *, /, %");  
}