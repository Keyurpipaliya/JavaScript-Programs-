   //    * 
   //  * * * 
 //   * * * * * 
//  * * * * * * * 
//* * * * * * * * * 

let prompt = require('prompt-sync') ();

let n = parseInt(prompt("Enter rows from patterns :"));

for (let i = 1; i <= n; i++) {
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(i * 2 - 1);

    console.log(row);
}