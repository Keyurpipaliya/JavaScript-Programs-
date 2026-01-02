// Write a program to input electricity unit charges and calculate total electricity bill
// according to the given condition:

let prompt = require('prompt-sync')();

let units = parseFloat(prompt("Enter the number of units :"));

let totalBill = 0;

if (units <= 50) {
    console.log("No bill for units less than or equal to 50.");
} else if (units <= 150) {
    console.log("No bill for units between 51 and 150.");
} else if (units <= 250) {
    totalBill = (units - 150) * 8 * 2 + (150 - 50) * 3 + (50 * 0);
    console.log(`Total bill for ${units} units is: ${totalBill}`);
}