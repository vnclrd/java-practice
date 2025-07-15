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