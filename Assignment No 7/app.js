// function displayDateTime() {
//     var now = new Date();
//     document.write(`<h2>Current Date and Time: ${now}</h2>`);
// }
// displayDateTime();


// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     document.write("Hello, " + fullName + "! Welcome.");
// }

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// greetUser(firstName, lastName);




// function addNumbers() {
//     var num1 = parseFloat(prompt("Enter first number:"));
//     var num2 = parseFloat(prompt("Enter second number:"));
//     var sum = num1 + num2;
//     return sum;
// }

// document.write("The sum is: " + addNumbers());


// function calculator(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     document.write(`<h2>Result: ${result}</h2>`);
// }


// var number1 = parseFloat(prompt("Enter first number:"));
// var number2 = parseFloat(prompt("Enter second number:"));
// var operator = prompt("Enter operator (+, -, *, /):");


// calculator(number1, number2, operator);


// function square(num) {
//     return num * num;
// }

// var number = parseFloat(prompt("Enter a number to square:"));
// alert("The square of " + number + " is: " + square(number));



// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// var number = parseInt(prompt("Enter a number to calculate factorial:"));
// alert("The factorial of " + number + " is: " + factorial(number));



// function displayCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// var startNum = parseInt(prompt("Enter the start number:"));
// var endNum = parseInt(prompt("Enter the end number:"));

// displayCounting(startNum, endNum);


// function isPalindrome(str) {
//     var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove special characters & spaces
//     var reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
// }


// var inputString = prompt("Enter a string to check if it's a palindrome:");
// document.write(isPalindrome(inputString) ? "Yes, it's a palindrome!" : "No, it's not a palindrome.");


// function capitalizeWords(sentence) {
//     return sentence.split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }

// var userSentence = prompt("Enter a sentence:");
// document.write("Capitalized Sentence: " + capitalizeWords(userSentence));


// function findLongestWord(sentence) {
//     var words = sentence.split(" ");
//     var longestWord = words.reduce((longest, currentWord) => 
//         currentWord.length > longest.length ? currentWord : longest, "");
//     return longestWord;
// }
// var userSentence = prompt("Enter a sentence:");
// alert("Longest Word: " + findLongestWord(userSentence));


// function countOccurrences(str, varter) {
//     var count = str.split(varter).length - 1;
//     return count;
// }

// var inputString = prompt("Enter a string:");
// var charToCount = prompt("Enter a lettter to count:");
// alert(`The varter "${charToCount}" appears ${countOccurrences(inputString, charToCount)} times.`);


// function calcCircleProperties(radius) {
//     var circumference = 2 * Math.PI * radius;
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write(`<h2>Radius: ${radius}</h2>`);
//     document.write(`<h2>Circumference: ${circumference.toFixed(2)}</h2>`);
//     document.write(`<h2>Area: ${area.toFixed(2)}</h2>`);
// }

// var radius = parseFloat(prompt("Enter the radius of the circle:"));
// calcCircleProperties(radius);




































