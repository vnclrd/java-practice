// EXERCISE 1 - Celsius to Fahrenheit Converter
function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9 / 5)) + 32 // celsius to fahrenhit conversion formula
    return fahrenheit.toFixed(2) // have 2 decimal places
}

let celsiusTemp1 = 37
let fahrenheitResult1 = convertToFahrenheit(celsiusTemp1)
console.log(`${celsiusTemp1} degrees Celsius is ${fahrenheitResult1} degrees Fahrenheit.`)

let celsiusTemp2 = 0
let fahrenheitResult2 = convertToFahrenheit(celsiusTemp2)
console.log(`${celsiusTemp2} degrees Celsius is ${fahrenheitResult2} degrees Fahrenheit.`)

console.log(Number.isInteger(2017));

// EXERCISE 3 - Grade Checker
function checkGrade(score) {
    if (typeof score !== 'number' || isNaN(score) || score < 0 || score > 100 || !Number.isInteger(score)) {
        return 'Invalid Score'
    }
    if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

let score1 = 99
let grade1 = checkGrade(score1)
console.log(`${score1} is equivalent to ${grade1}.`)

// EXERCISE 4 - Login System
function loginUser(username, password) {
    const validUsername = 'vnclrd'
    const validPassword = '1234'
    if (username === validUsername && password === validPassword) {
        return `Welcome, Admin ${username}!`
    } else {
        return 'Invalid credentials.'
    }
}

let testUser1 = 'vnclrd'
let testPass1 = '1234'
let loginResult1 = loginUser(testUser1, testPass1)
console.log(loginResult1)

// EXERCISE 5 - Day of the Week with Number Input
function getDayName(dayNum) {
    if (typeof dayNum !== 'number' || dayNum < 1 || dayNum > 7 || !Number.isInteger(dayNum)) {
        return 'Invalid Day Number';
    }

    switch (dayNum) {
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        case 7:
            return 'Sunday'
        default:
            return 'Invalid Day Number.'
    }
}

let day1 = 1
let whatDay1 = getDayName(day1)
console.log(`Day ${day1} is ${whatDay1}.`)