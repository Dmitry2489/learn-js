//  Create Decimal Numbers with JavaScript

const ourDecimal = 5.7;

// Only change code below this line

const myDecimal = 5.7

//  Create Decimal Numbers with JavaScript End

// Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
// Prevent Infinite Loops with a Valid Terminal Condition End

// Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;
// Multiply Two Decimals with JavaScript End

// Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2; // Change this line
// Divide One Decimal by Another with JavaScript End


// Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = [];
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);

  // Use Caution When Reinitializing Variables Inside a Loop End

//   Compound Assignment With Augmented Addition 
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
//   Compound Assignment With Augmented Addition End


// Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
// Compound Assignment With Augmented Subtraction End

// Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
// Compound Assignment With Augmented Multiplication End

// Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
// Compound Assignment With Augmented Division End

// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
// Escaping Literal Quotes in Strings End

// Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// Quoting Strings with Single Quotes End