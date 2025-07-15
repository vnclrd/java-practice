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