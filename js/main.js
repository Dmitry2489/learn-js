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