// * * * * * * * * * 
//  * * * * * * * 
  //  * * * * * 
    //  * * * 
      //  * 

    let prompt = require('prompt-sync') ();

    let n = parseInt(prompt("Enter rows for Inverted Pattern: "));

    for (let i = n; i>=1; i--) {
        let row = "";


        row += "  ".repeat(n - i);
        row += "* ".repeat(i * 2 - 1);

        console.log(row);
    }