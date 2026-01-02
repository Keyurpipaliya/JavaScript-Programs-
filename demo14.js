// Write a program to input any alphabet and check whether it is vowel or consonant.

let prompt = require('prompt-sync') ();

let alphabet = prompt("Enter an alphabet:");

if (alphabet.length != 1) {
    console.log("please enter a single alphabet.");
} else if (alphabet >= 'A' && alphabet <= 'Z') {
    if (alphabet === 'A' || alphabet === 'E' || alphabet === 'I' || alphabet === 'O' || alphabet === 'U') {
        console.log("The alphabet is an uppercase vowel.");
    } else {
        console.log("The alphabet is an uppercase consonant.");
    }
} else if (alphabet >= 'a' && alphabet <= 'z') {
    if (alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u') {
        console.log("The alphabet is a lowercase vowel.");
    } else {
        console.log("The alphabet is a lowercase consonant.");
    }
}