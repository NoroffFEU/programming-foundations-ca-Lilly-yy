// Question 1: Create two number variables, one with an integer value and one with a decimal value.
let integerNumber = 5;
let decimalNumber = 3.14;

// Question 2: Declare and initialize a variable with all the working days of the week separated by hyphens.
var daysOfTheWeek = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday";
console.log(daysOfTheWeek);

// Question 3: Create four variables that demonstrate the following operations: addition, subtraction, multiplication, division.
// Assuming we'll use some example numbers: 10 and 5
let additionResult = integerNumber + 10;        // 5 + 10 = 15
let subtractionResult = integerNumber - 2;      // 5 - 2 = 3
let multiplicationResult = integerNumber * 2;   // 5 * 2 = 10
let divisionResult = decimalNumber / 2;         // 3.14 / 2 = 1.57

// Question 4: Declare a boolean variable with an initial value of false.
var isComplete = false;

// Question 5: Console log the number of characters in this string: "The frogs are angry."
var sentence = "The frogs are angry.";
console.log(sentence.length); // Output will be 18

// Question 6: Convert the following variable names to camelCase:
var timeElapsed; // Previously: var time_elapsed;
var totalPrice;  // Previously: var totalprice;

// Question 7: Convert the following string values to number values:
var number1 = "53";
var number2 = "44.6";

var convertedNumber1 = parseInt(number1);
var convertedNumber2 = parseFloat(number2);



// Question 8: Check the type of the following variables and log the results.
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

console.log(typeof pet);            // "string"
console.log(typeof age);            // "number"
console.log(typeof discountApplied); // "boolean"
console.log(typeof timeLeft);       // "undefined"

var typeOfPet = typeof pet;
console.log(typeOfPet);

var typeOfAge = typeof age;
console.log(typeOfAge);

var typeOfDiscountApplied = typeof discountApplied;
console.log(typeOfDiscountApplied);

var typeOfTimeLeft = typeof timeLeft;
console.log(typeOfTimeLeft);


// Question 9: Update the heading's inner HTML.
var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

// Question 10: Change the body's background color to lightskyblue.
var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";


console.log(7 === 7) // Output: True
console.log(7 === 10) // Output: False

var myNumber = 7;
var myString = "dog";

// is myNumber greater than 8?
console.log(myNumber > 8) // Output: False

  // is myNumber less than or equal to 7?
 console.log(myNumber <= 8) // Output: True

  // is myString exactly equal to "dog"?
 console.log(myString === "dog") // Output: True

  // is myString not equal to "cat"?
  console.log(myString !== "cat") // Output:  True

  var isLoggedIn = false;

if (isLoggedIn === true) {
  console.log("The user is logged in");
} else {
  console.log("The user is logged out");
}

// example 1
var isLoggedIn = false;

// if isLoggedIn is equal to true, log "Logged in"
if (isLoggedIn === true) {
    console.log("Logged in");
} else {
    // if isLoggedIn is not equal to true, log "NOT Logged in"
    console.log("NOT Logged in");
}

// example 2
var total = 80;

// if total is greater than 60, log "This is expensive"
if (total > 60) {
    console.log("This is expensive");
}

// example 3
var total = 90;

// if total is greater than or equal to 60, log "This is expensive"
if (total >= 60) {
    console.log("This is expensive");
} else {
    // if total is less than 60, log "Cheap"
    console.log("Cheap");
}

// example 4
var answer = 8;
var guessedNumber = 8;


// if the value of answer is equal to the value of guessedNumber, log "Correct guess"
if (guessedNumber === answer) {
    console.log("Correct guess");
} else {
    // if the value of answer is not equal to the value of guessedNumber, log "Incorrect answer"
    console.log("Incorrect answer");
}

// example 5
var answer = 8;
var guessedNumber = 9;

// if the value of guessedNumber is not equal to answer, log "Incorrect guess"
if (guessedNumber !== answer) {
    console.log("Incorrect guess");
} else {
    // if the value of guessedNumber is equal to answer, log "Correct answer"
    console.log("Correct answer");
}

// example 6
var grade = 7;
var letterGrade;

if (grade === 10) {
    // if grade is equal to 10 assign "A" to letterGrade
    letterGrade = "A";
} else if (grade === 9) {
    // if grade is equal to 9 assign "A" to letterGrade
    letterGrade = "A";
} else if (grade === 8) {
    // if grade is equal to 8 assign "B" to letterGrade
    letterGrade = "B";
} else if (grade === 7) {
    // if grade is equal to 7 assign "C" to letterGrade
    letterGrade = "C";
} else {
    // if grade is not equal to 10, 9, 8 or 7, assign "Unkown" to letterGrade
    letterGrade = "Unkown";
}

console.log(letterGrade);

//-------------------------------------------------------------------------//


var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log ("The first number is smaller than the second")
}


var age = 11;
var minimumAge = "13";

if (age >= parseInt (minimumAge)) {
    console.log ("ok to go in")
} else {
console.log ("can't go in")
}


var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat (income) <= parseFloat (maximumIncome)) {
    console.log ("lower than max")
} else {
    console.log ("maximum or higher")
}


var colour = "blue";

if (colour === "blue") {
    console.log("This colour is a bit rubbish");
}

var invoicePaid = false;

if (invoicePaid === false)
console.log ("Not paid")

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
console.log ("You lose again")
}

var dayOfTheWeek = 4;
var dayName;

switch (dayOfTheWeek) {
  case 1:
    dayName = "Monday";
    break;
    case 2:
        dayName = "Tuesday";
    break;
    case 3:
        dayName = "Wednesday";
    break;
    case 4:
        dayName = "Thursday";
    break;
    default:
        dayName = "Invalid"
}

console.log(dayName)

for (var i = 1; i <= 5; i++) {
    console.log(i);
  }


  for (var count = 1; count <= 5; count++) {
    console.log(count);
  }

var i = 10;

for(var i = 10; i >= 1; i--) {
    console.log (i)
}


for(var i = 10; i <= 20; i++) {
    if (i % 2 !== 0) {
    console.log (i)
}
}










