// Write a program to accept 10 values and print its average.

let prompt = require('prompt-sync')();

let sum = 0;
let count = 10;
let numbers = [];

for (let i = 1; i<=count; i++) {
    let value = parseFloat(prompt(`Enter value ${i}: `));
    numbers.push(value);
    sum += value;
}

let average = sum / count;
console.log(`The average of the entered numbers is: ${average.toFixed(2)}`);    