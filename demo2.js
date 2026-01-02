// Make addition of 2 values and 3 values with user define value

let prompt = require('prompt-sync')();

let operation = 0;

a = 0;
b = 0;
c = 0;

operation = parseInt(prompt("Enter the operation you want to perform (1 for 2 values, 2 for 3 values): "));

switch (operation) {
    case 2:
        a = parseInt(prompt("Enter First number: "));
        b = parseInt(prompt("Enter second number: "));

        console.log(`Sum is ${a + b}`);
        break;
    case 3:
        a = parseInt(prompt("Enter First number: "));
        b = parseInt(prompt("Enter second number: "));
        c = parseInt(prompt("Enter third number: "));

        console.log(`Sum is ${a + b + c}`);
        break;
    default:
        console.log("Invalid Operation.");
}

// if condition

if (operation === 2) {
    a = parseInt(prompt("Enter First number: "));
    b = parseInt(prompt("Enter second number: "));

    console.log(`Sum is ${a + b}`);
} else if(operation === 3) {
    a = parseInt(prompt("Enter First number: "));
    b = parseInt(prompt("Enter second number: "));
    c = parseInt(prompt("Enter third number: "));
    console.log(`Sum is ${a + b + c}`);
} else {
    console.log("Invalid Operation.");
    console.log("Enter is not valid operation:");
}
