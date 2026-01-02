// Write a program to calculate profit or loss.

let prompt = require('prompt-sync')();

let costprice = parseFloat(prompt("Enter the cost price: "));
let sellingprice = parseFloat(prompt("Enter the selling price: "));

if (isNaN(costprice) || isNaN(sellingprice)) {
    console.log("Please Enter valid numbers for cost price and selling price.");
} else if (sellingprice > costprice) {
    console.log(`Profit: ${sellingprice - costprice}`);
} else if (sellingprice < costprice) {
    console.log(`Loss: ${costprice - sellingprice}`);
} else {
    console.log("No Profit No Loss.");
}