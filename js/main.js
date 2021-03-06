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

// Concatenating Strings with Plus Operator
const myStr = "This is the start." + " This is the end."; // Change this line
// Concatenating Strings with Plus Operator End

// Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
// Concatenating Strings with the Plus Equals Operator End


// Constructing Strings with Variables
// Only change code below this line
const myName = "freeCodeCamp";
const myStr = "Hello, our name is " + myName + ", how are you?";
// Constructing Strings with Variables End

// Appending Variables to Strings

// Change code below this line
const someAdjective = "test";
let myStr = "Learning to code is ";

myStr += someAdjective
// Appending Variables to Strings End


// Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
// Find the Length of a String End

// Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
// Use Bracket Notation to Find the First Character in a String End

// Understand String Immutability

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Understand String Immutability End



// Use Bracket Notation to Find the Nth Character in a String Start
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
// Use Bracket Notation to Find the Nth Character in a String End


// Use Bracket Notation to Find the Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
// Use Bracket Notation to Find the Last Character in a String End

// Use Bracket Notation to Find the Nth-to-Last Character in a String 
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
// Use Bracket Notation to Find the Nth-to-Last Character in a String  End

// Word Blanks 

// Word Blanks End

// Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ['1', 3];
// Store Multiple Values in one Variable using JavaScript Arrays End

// Nest one Array within Another Array
// Only change code below this line
const myArray = [["Bulls", 23], ["White Sox", 45]];
// Nest one Array within Another Array End

// Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number = 5, value = 1) => number + value;
// Only change code above this line
// Set Default Parameters for Your Functions End


function cityModelInput(selectorsTrigers, input) {

  let dilerSelectArray = document.querySelectorAll(selectorsTrigers)

  dilerSelectArray.forEach(select => {
      console.log(select)

      select.addEventListener('change', ()=> {
        let optionArray = select.querySelectorAll('option')

        optionArray.forEach(option => {
          // console.log(option.textContent)
          // console.log(option.value)

          if (select.value == option.value) {
            console.log(option.textContent)
            let formParent =  select.closest('form')

            formParent.querySelector(input).value = option.textContent

          }
        })

        console.log('change')
        console.log(select.value)
      })
  })

}

cityModelInput('[data-diler="diler"]', '[data-input-form="city"]')
cityModelInput('[data-city="city"]', '[data-input-form="city"]')
cityModelInput('[data-model="model"]', '[data-input-form="model"]')
cityModelInput('[data-topic="topic"]', '[data-input-form="topic"]')
cityModelInput('[data-dilers="dilers"]', '[data-input-form="dilers"]')


$('.mask_card_set').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
});

const showAlert = function alertCustomMessage(event) {
  // getting the data
  const { data } = event.target;
  alert(JSON.stringify(data));
};

const removeListener = function removeSpecificListenerFromElement(event) {
  // same logic as at line 3
  const { element, eventType, listener } = event.target.data;
  element.removeEventListener(eventType, listener);
};

const alertButtonElement = document.querySelector('[data-action="alert"]');
// setting the data to be shown
alertButtonElement.data = {
  title: 'Test title',
  data: [1, 2, 4],
};

alertButtonElement.addEventListener('click', showAlert);


const removeAlertListenerButtonElement = document.querySelector('[data-action="remove-alert-listener"]');
// same logic as at lines 15-18
removeAlertListenerButtonElement.data = {
  element: alertButtonElement,
  eventType: 'click',
  listener: showAlert,
};

removeAlertListenerButtonElement.addEventListener('click', removeListener);