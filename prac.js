console.log(5);

// console.log(60)

/*
console.log(60)
*/

// LESSON: Data Types

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World');

console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim());

console.log(Math.random() * 100); // Generates a random number and multiply to 100
console.log(Math.floor(Math.random() * 100)); // Math.floor rounds the number down to the nearest whole number

console.log(Math.ceil(43.8)); // Round up to the nearest whole integer
console.log(Number.isInteger(2017)); // Check if the number is an integer

// LESSON: Variables

// var - can be re-assigned; function/globally-scoped
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

// let - can be re-assigned; block-scoped
let changeMe = true;
changeMe = false;
console.log(changeMe);

// const - cannot be re-assigned
const entree = 'Enchiladas';
// entree = 'Tacos';
console.log(entree);

// Mathematical Assignment Operations
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

// String Concatenation with Variables
let favoriteAnimal = 'Dog';
console.log('My favorite animal: ' + favoriteAnimal);

// String Interpolation
const myName = 'Ivan';
const myCity = 'Taguig';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// typeof operator
let newVariable = 1;
console.log(typeof newVariable);


// If statement
let sale = true;

if (sale) {
  console.log('Time to buy!');
}

// If else statement
let isSale = true;
isSale = false;

if (isSale) {
    console.log('Buy it.');
} else {
    console.log("Don't buy it yet.")
}

// Comparison Operators
let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

// Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// Truthy and Falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
let tool = '';
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`); // Prints "The pen is mightier than the sword."

// Ternary Refactor
let isLocked = true;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Switch Keyword
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// LESSON: Functions

function getReminder() {
  console.log('Water the plants.')
}

function greetInSpanish() {
  console.log('Buenas tardes.')
}

getReminder()
greetInSpanish()

// Call function thrice
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.')
}

sayThanks()
sayThanks()
sayThanks()

// Parameters and Arguments
function sayThanks(name) {
  console.log('Thank you for your purchase, '+ name +'! We appreciate your business.');
}

sayThanks('Cole')

// Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList()


// NEED TO REVIEW


// Return (calculate the number of monitors needed)
function monitorCount(rows, columns) { // declare a function with 2 parameters
  return rows * columns // computer monitors by multiplyting rows and columns
}

const numOfMonitors = monitorCount(5, 4) // the office has 5 rows and 4 columns
console.log(numOfMonitors)

// Helper Function (calculate the cost of monitors)
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200 // the cost of each monitor is 200
}

const totalCost = costOfMonitors(5, 4) // the office has 5 rows and 4 columns
console.log(totalCost)

// Function Expressions
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return true
    } else {
        return false
    }
}

plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'))


// NEED TO REVIEW


// Arrow Functions (replace the word 'function' with '=>')
const plantsNeedWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Concise Body Arrow Function
const plantzNeedWater = day => day === 'Wednesday' ? true : false
console.log(plantzNeedWater('Tuesday'))






// EXERCISE 1
let celsius = 37
let fahrenheit = celsius * (9 / 5) + 32
console.log(celsius + ' degrees celsius is equivalent to ' + Math.ceil(fahrenheit) + ' degrees fahrenheit.')


// EXERCISE 2
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100)
    const finalPrice = originalPrice - discountAmount 
    return finalPrice
}

const myFinalPrice = calculateDiscountedPrice(100, 20)
console.log (myFinalPrice)

// EXERCISE 3
const score = 99
if (score >= 90) {
    console.log('Grade: A')
} else if (score >= 80 && score <= 89) {
    console.log('Grade: B')
} else if (score >= 70 && score <= 79) {
    console.log('Grade: C')
} else if (score >= 60 && score <= 69) {
    console.log('Grade: D')
} else {
    console.log('Grade: F')
}

// EXERCISE 4
const user = 'ivan'
const pass = '1234'
let isAuthenticated = false
if (user === 'ivan' && pass === '1234') {
    isAuthenticated = true
    console.log('Login successful.')
    console.log(`Welcome, Admin ${user}!`)
} else {
    console.log('Invalid credentials.')
}

// EXERCISE 5
let dayNumber = '1'

switch (dayNumber) {
    case '1':
        console.log('Monday')
        break;
    case '2':
        console.log('Tuesday')
        break;
    case '3':
        console.log('Wednesday')
        break;
    case '4':
        console.log('Thursday')
        break;
    case '5':
        console.log('Friday')
        break;
    case '6':
        console.log('Saturday')
        break;
    case '7':
        console.log('Sunday')
        break;
    default:
        console.log("Invalid Day Number")
        break;
}
