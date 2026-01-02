//  Write a program to count total number of notes in entered amount.

let prompt = require('prompt-sync')();

let amount = parseInt(prompt("Enter the amount: "));

let notes = [2000, 500, 100, 50, 20, 10, 5, 1];
let noteCount = {};

for (let note of notes) {
    if (amount >= note) {
        noteCount[note] = Math.floor(amount / note);
        amount %= note;
    }
}

console.log("Total number of notes in the entered amount:");

for (let note in noteCount) {
    console.log(`${note} : ${noteCount[note]}`);
}