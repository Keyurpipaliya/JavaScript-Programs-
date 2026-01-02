// Accept 10 values and print positive numbers.

let prompt = require('prompt-sync')();       

let positiveNumbers = [10];

for (let i = 1; i <= 10; i++) {
    let value = parseInt(prompt(`Enter value ${i}: `));
    if (value > 0) {
        positiveNumbers.push(value);
    }
}