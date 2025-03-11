
// File 5 Code

// 1. Greet user by name
let userName = prompt("Enter your name:");
console.log("Hello, " + userName + "!");

// 2. Multiplication table
let number = prompt("Enter a number (default is 5):") || 5;
number = parseInt(number);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 3. Welcome to Karachi
let city = prompt("Enter your city:");
if (city.toLowerCase() === "karachi") {
    console.log("Welcome to the city of lights");
}

// 4. Greet based on gender
let gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma’am");
}

// 5. Traffic signal messages
let signalColor = prompt("Enter the signal color:").toLowerCase();
switch (signalColor) {
    case "red":
        console.log("Vehicles must stop");
        break;
    case "yellow":
        console.log("Vehicles should get ready to move");
        break;
    case "green":
        console.log("Vehicles can move now");
        break;
    default:
        console.log("Invalid signal color");
}

// 6. Age check
let maxAge = prompt("Enter max age:");
let currentAge = prompt("Enter current age:");
if (currentAge <= maxAge) {
    console.log("You are welcome");
}

// 7. Fuel check
let fuel = prompt("Enter remaining fuel in liters:");
if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
}

// 8. Script checks
let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 9. Percentage and grade
let subject1 = parseInt(prompt("Enter marks for subject 1:"));
let subject2 = parseInt(prompt("Enter marks for subject 2:"));
let subject3 = parseInt(prompt("Enter marks for subject 3:"));
let totalMarks = parseInt(prompt("Enter total marks:"));
let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
console.log(`Marks obtained: ${obtainedMarks}`);
console.log(`Total marks: ${totalMarks}`);
console.log(`Percentage: ${percentage}%`);
console.log(`Grade: ${grade}`);
console.log(`Remarks: ${remarks}`);

// 10. Shopping cart system
let item1 = prompt("Enter name of item 1:");
let item2 = prompt("Enter name of item 2:");
let price1 = parseFloat(prompt("Enter price of item 1:"));
let price2 = parseFloat(prompt("Enter price of item 2:"));
let quantity1 = parseInt(prompt("Enter quantity of item 1:"));
let quantity2 = parseInt(prompt("Enter quantity of item 2:"));
let shippingCharges = parseFloat(prompt("Enter shipping charges:"));
let totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;
if (totalCost > 2000) {
    totalCost *= 0.9;
    console.log("10% discount applied");
}
console.log(`Total cost: ${totalCost}`);

// 11. Guess game
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess the secret number (1-10):"));
if (guess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
}

// 12. Divisibility by 3
let num = parseInt(prompt("Enter a number:"));
if (num % 3 === 0) {
    console.log("Number is divisible by 3");
}

// 13. Team scores
let teamA = parseInt(prompt("Enter score for Team A:"));
let teamB = parseInt(prompt("Enter score for Team B:"));
if (teamA > teamB) {
    console.log("Team A wins");
} else if (teamB > teamA) {
    console.log("Team B wins");
} else {
    console.log("It's a tie");
}

// 14. Variable type check
let var1 = "Hello";
let var2 = 42;
let var3 = true;
console.log(`Type of var1: ${typeof var1}`);
console.log(`Type of var2: ${typeof var2}`);
console.log(`Type of var3: ${typeof var3}`);

// 15. Even or odd
let checkNum = parseInt(prompt("Enter a number:"));
if (checkNum % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 16. Temperature message
let temp = parseInt(prompt("Enter temperature:"));
if (temp > 40) {
    console.log("It is too hot outside.");
} else if (temp > 30) {
    console.log("The Weather today is Normal.");
} else if (temp > 20) {
    console.log("Today’s Weather is cool.");
} else if (temp > 10) {
    console.log("OMG! Today’s weather is so Cool.");
}

// 17. Calculator
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");
if (operation === "+") {
    console.log(num1 + num2);
} else if (operation === "-") {
    console.log(num1 - num2);
} else if (operation === "*") {
    console.log(num1 * num2);
} else if (operation === "/") {
    console.log(num1 / num2);
} else if (operation === "%") {
    console.log(num1 % num2);
}

// 18. Day check
let day = prompt("Enter day name:").toLowerCase();
if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)) {
    console.log("It’s a week day");
} else if (day === "saturday") {
    console.log("It’s weekend");
} else if (day === "sunday") {
    console.log("Yay! It’s a holiday");
}

// 19. Pass or fail
let score = parseInt(prompt("Enter your score:"));
if (score > 50) {
    console.log("You are passed");
} else {
    console.log("Try again!");
}

// 20. Greater number
let number1 = parseInt(prompt("Enter first number:"));
let number2 = parseInt(prompt("Enter second number:"));
if (number1 > number2) {
    console.log(`${number1} is greater`);
} else if (number2 > number1) {
    console.log(`${number2} is greater`);
} else {
    console.log("Both numbers are equal");
}

// 21. Translator
let langCode = prompt("Enter language code (en, es, de):").toLowerCase();
switch (langCode) {
    case "en":
        console.log("Hello, World");
        break;
    case "es":
        console.log("Hola, Mundo");
        break;
    case "de":
        console.log("Hallo, Welt");
        break;
    default:
        console.log("Hello, World");
}

// 22. Positive or negative
let checkNum2 = parseInt(prompt("Enter a number:"));
if (checkNum2 > 0) {
    console.log("Positive");
} else if (checkNum2 < 0) {
    console.log("Negative");
}

// 23. Pluralizer
let noun = prompt("Enter a noun:");
let quantity = parseInt(prompt("Enter a number:"));
if (quantity === 1) {
    console.log(`${quantity} ${noun}`);
} else {
    console.log(`${quantity} ${noun}s`);
}
// File 6 Code

// 1. Check divisibility by 3
let num = parseInt(prompt("Enter a number:"));
if (num % 3 === 0) {
    console.log("Number is divisible by 3");
} else {
    console.log("Number is not divisible by 3");
}

// 2. Check even or odd
let number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// 3. Age check
let age = parseInt(prompt("Enter your age:"));
if (age > 18) {
    console.log("Old enough");
} else {
    console.log("Too young");
}

// 4. Name greeting
let userName = prompt("Enter your name:");
if (userName === "YourName") {
    console.log("Hello " + userName + "!");
}

// 5. Divisibility by 3 using switch
let inputNum = parseInt(prompt("Enter a number:"));
switch (inputNum % 3 === 0) {
    case true:
        console.log("Number is divisible by 3");
        break;
    default:
        console.log("Number is not divisible by 3");
}

// 6. Check character type
let char = prompt("Enter a character:");
if (!isNaN(char)) {
    console.log("It is a number");
} else if (char >= 'A' && char <= 'Z') {
    console.log("Uppercase letter");
} else if (char >= 'a' && char <= 'z') {
    console.log("Lowercase letter");
}

// 7. Calculator
let n1 = parseFloat(prompt("Enter first number:"));
let n2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /, %):");
switch (operator) {
    case '+':
        console.log(n1 + n2);
        break;
    case '-':
        console.log(n1 - n2);
        break;
    case '*':
        console.log(n1 * n2);
        break;
    case '/':
        console.log(n1 / n2);
        break;
    case '%':
        console.log(n1 % n2);
        break;
    default:
        console.log("Invalid operator");
}

// 8. Time-based message
let time = parseInt(prompt("Enter the time in 24-hour format:"));
if (time >= 600 && time <= 900) {
    console.log("Breakfast is served.");
} else if (time >= 1100 && time <= 1300) {
    console.log("Time for lunch.");
} else if (time >= 1700 && time <= 2000) {
    console.log("It's dinner time.");
} else {
    console.log("Sorry, you'll have to wait, or go get a snack.");
}

// 9. Leap year check
let year = parseInt(prompt("Enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// 10. Password validation
let correctPassword = "password123";
let enteredPassword = prompt("Enter your password:");
if (!enteredPassword) {
    console.log("Please enter your password");
} else if (enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

// 11. Name check
let firstName = "Ali";
if (firstName === "Fahad") {
    console.log("Hello Fahad!");
} else {
    console.log("You are not Fahad");
}

// 12. Fix the if/else statement
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// 13. Larger number
let int1 = parseInt(prompt("Enter first integer:"));
let int2 = parseInt(prompt("Enter second integer:"));
if (int1 > int2) {
    console.log(int1 + " is larger");
} else if (int1 < int2) {
    console.log(int2 + " is larger");
} else {
    console.log("Both are equal");
}

// 14. Positive, negative, or zero
let inputNumber = parseInt(prompt("Enter a number:"));
if (inputNumber > 0) {
    console.log("Positive");
} else if (inputNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 15. Meal time
let currentHour = parseInt(prompt("What is the current hour?"));
if (currentHour >= 6 && currentHour < 9) {
    console.log("Breakfast is served.");
} else if (currentHour >= 11 && currentHour < 13) {
    console.log("Time for lunch.");
} else if (currentHour >= 17 && currentHour < 20) {
    console.log("It's dinner time.");
} else {
    console.log("Sorry, you'll have to wait, or go get a snack.");
}

// 16. Variable type check
let value = "Hello";
if (typeof value === "number") {
    console.log("Number");
} else if (typeof value === "string") {
    console.log("String");
} else if (typeof value === "boolean") {
    console.log("Boolean");
} else {
    console.log("Undefined");
}

// 17. Vowel check
let vowelCheck = prompt("Enter a character:").toLowerCase();
if (vowelCheck === 'a' || vowelCheck === 'e' || vowelCheck === 'i' || vowelCheck === 'o' || vowelCheck === 'u') {
    console.log("True");
} else {
    console.log("False");
}

// 18. Comparison operator
console.log(10 !== 8);

// 19. Month switch statement
let monthNumber = parseInt(prompt("Enter the number of the month (1-12):"));
switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// 20. Ternary operator
let userAge = parseInt(prompt("Enter your age:"));
let voteable = userAge < 18 ? "Too young" : "Old enough";
console.log(voteable);

