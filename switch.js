// switch case condition

let prompt = require('prompt-sync')();

let a, b;
let Operation;

a = parseFloat(prompt("Enter first number:"));
b = parseFloat(prompt("Enter second number:"));

Operation = prompt("Enter operation is Perform Numbers(+, -, *, /, %):");

switch (Operation) {
    case '+':
        console.log(`Result: ${a + b}`);
        break;
    case '-':
        console.log(`Result: ${a - b}`);
        break;
    case '*':
        console.log(`Result: ${a * b}`);
        break;
    case '/':
        console.log(`Result: ${a / b}`);
        break;
    case '%':
        console.log(`Result: ${a % b}`);
        break;
    default:
        console.log("Operation is not valid operator.");
        break;
}

// if condition using switch case

if (Operation == '+') {
    console.log(`Result: ${a + b}`);
} else if (Operation == '-') {
    console.log(`Result: ${a - b}`);    
} else if (Operation == '*') {
    console.log(`Result: ${a * b}`);
} else if (Operation == '/') {
    console.log(`Result: ${a / b}`);
} else if (Operation == '%') {
    console.log(`Result: ${a % b}`);
} else {
    console.log("Operation is invalid operator");
}