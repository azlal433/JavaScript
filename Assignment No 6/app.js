// var num = parseFloat(prompt("Enter a positive number:"));

// if (num > 0) {
//     document.write("<h2>Number: " + num + "</h2>");
//     document.write("<h2>Round off: " + Math.round(num) + "</h2>");
//     document.write("<h2>Floor: " + Math.floor(num) + "</h2>");
//     document.write("<h2>Ceil: " + Math.ceil(num) + "</h2>");
// } else {
//     alert("Please enter a valid positive number.");
// }



// var number = parseFloat(prompt("Enter a number:"));
// document.write("<h2>Absolute Value of " + number + " is: " + Math.abs(number) + "</h2>");


// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("<h2>Random Dice Value: " + diceValue + "</h2>");


// var coinToss = Math.floor(Math.random() * 2) + 1;
// document.write("<h2>Random Coin Toss: " + (coinToss === 1 ? "Heads" : "Tails") + "</h2>");


// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("<h2>Random Number between 1 and 100: " + randomNumber + "</h2>");



// var weight = prompt("Enter your weight (kg):");
// document.write("<h2>Your Weight: " + parseFloat(weight) + " kg</h2>");


// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (1-10):"));

// if (userGuess === secretNumber) {
//     alert("Congratulations! You guessed the correct number.");
// } else {
//     alert("Wrong guess! The secret number was " + secretNumber);
// }


// var currentDate = new Date();
// document.write(`<h2>Current Date and Time: ${currentDate}</h2>`);


// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = new Date().getMonth();
// document.write(`<h2>Current Month: ${months[currentMonth]}</h2>`);


// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = new Date().getDay();
// document.write(`<h2>Today is: ${days[currentDay]}</h2>`);



// var dayIndex = new Date().getDay();
// if (dayIndex === 0 || dayIndex === 6) {
//     document.write("<h2>It's a Fun day! </h2>");
// } else {
//     document.write("<h2>It's a work day! </h2>");
// }



// var currentMilliseconds = new Date().getTime();
// document.write(`<h2>Milliseconds since January 1, 1970: ${currentMilliseconds}</h2>`);



// var startOfYear = new Date("January 1, 2024");
// var secondsPassed = Math.floor((today - startOfYear) / 1000);
// document.write(`<h2>${secondsPassed} seconds have passed since January 1, 2024.</h2>`);




// var newTime = new Date();
// newTime.setHours(newTime.getHours() + 1);
// document.write(`<h2>New time (1 hour ahead): ${newTime}</h2>`);




// var pastDate = new Date();
// pastDate.setFullYear(pastDate.getFullYear() - 100);
// document.write(`<h2>100 years back, the date was: ${pastDate}</h2>`);



// var birthYear = parseInt(prompt("Enter your birth year:"));
// var currentYear = new Date().getFullYear();
// var age = currentYear - birthYear;
// document.write(`<h2>You are ${age} years old.</h2>`);



// var customerName = prompt("Enter your name:");
// var month = prompt("Enter the current month:");
// var unitsConsumed = parseFloat(prompt("Enter number of units consumed:"));
// var chargesPerUnit = 18;
// var latePaymentSurcharge = 350;


// var netAmount = unitsConsumed * chargesPerUnit;
// var grossAmount = netAmount + latePaymentSurcharge;


// document.write(`<h2>Electricity Bill</h2>`);
// document.write(`<p><strong>Customer Name:</strong> ${customerName}</p>`);
// document.write(`<p><strong>Month:</strong> ${month}</p>`);
// document.write(`<p><strong>Number of Units:</strong> ${unitsConsumed}</p>`);
// document.write(`<p><strong>Charges per Unit:</strong> ${chargesPerUnit} PKR</p>`);
// document.write(`<p><strong>Net Amount Payable (within Due Date):</strong> ${netAmount.toFixed(2)} PKR</p>`);
// document.write(`<p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge} PKR</p>`);
// document.write(`<p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmount.toFixed(2)} PKR</p>`);








