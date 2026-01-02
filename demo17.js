// Write a program to input marks of five subjects English, Math, Science, History and
// Computer. Calculate percentage and grade according to following:

let prompt = require('prompt-sync')();  

let English = parseFloat(prompt("Enter marks for English: "));
let Math = parseFloat(prompt("Enter marks for Math: "));
let Science = parseFloat(prompt("Enter marks for Science: "));
let History = parseFloat(prompt("Enter marks for History: "));
let Computer = parseFloat(prompt("Enter marks for Computer: "));
let totalMarks = English + Math + Science + History + Computer;
let percentage = (totalMarks / 500) * 100;

if (isNaN(English) || isNaN(Math) || isNaN(Science) || isNaN(History) || isNaN(Computer)) {
    console.log("Please Enter valid marks for all subjects.");
} else if (percentage >= 90 && percentage <= 100) {
    console.log("Grade: A+");
} else if (percentage >= 80 && percentage < 90) {
    console.log("Grade: A");
} else if (percentage >= 70 && percentage < 80) {
    console.log("Grade: B");
} else if (percentage >= 60 && percentage < 70) {
    console.log("Grade: C");
} else if (percentage >= 50 && percentage < 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}