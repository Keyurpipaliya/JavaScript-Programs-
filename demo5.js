// Write a program to accept 10 values and print its sum.

let prompt = require('prompt-sync')();

let sum = 0;

for (let i = 1; i <= 10; i++) {
    let value = parseInt(prompt(`Enter value ${i}: `));
    sum += value;
}