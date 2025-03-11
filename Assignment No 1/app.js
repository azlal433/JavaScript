 
 //File no 1 code
 
 // Add Two Numbers
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
document.write("The sum is: " + sum + "<br>");

// Subtraction, Multiplication, Division, Modulus
var subtraction = num1 - num2;
document.write("Subtraction: " + subtraction + "<br>");
var multiplication = num1 * num2;
document.write("Multiplication: " + multiplication + "<br>");
var division = num1 / num2;
document.write("Division: " + division + "<br>");
var modulus = num1 % num2;
document.write("Modulus: " + modulus + "<br>");

// Variable Manipulation
var value;
document.write("Value after variable declaration is: " + value + "<br>");
value = 3;
document.write("Initial value: " + value + "<br>");
value = value + 1;
document.write("Value after increment is: " + value + "<br>");
value = value + 7;
document.write("Value after addition is: " + value + "<br>");
value = value - 1;
document.write("Value after decrement is: " + value + "<br>");
var remainder = value % 3;
document.write("The remainder is: " + remainder + "<br>");

// Movie Ticket Cost
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("The cost of 5 tickets is: " + totalCost + " PKR<br>");

// Multiplication Table
var num = 5;
document.write("Multiplication Table of " + num + "<br>");
for (var i = 1; i <= 10; i++) {
    var result = num * i;
    document.write(num + " x " + i + " = " + result + "<br>");
}

// Temperature Converter
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
fahrenheit = 77;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");

// Shopping Cart
var price1 = 500;
var price2 = 300;
var quantity1 = 2;
var quantity2 = 3;
var shipping = 100;
var totalCost = (price1 * quantity1) + (price2 * quantity2) + shipping;
document.write("Total cost: " + totalCost + " PKR<br>");

// Percentage Calculation
var totalMarks = 500;
var obtainedMarks = 420;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br>");

// Currency Converter
var usd = 10;
var sar = 25;
var pkr = (usd * 104) + (sar * 28);
document.write("Total in PKR: " + pkr + "<br>");

// Arithmetic Expression
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("Result: " + result + "<br>");

// Age Calculator
var currentYear = 2025;
var birthYear = 1995;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old.<br>");

// Geometrizer
var radius = 5;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Circumference: " + circumference + "<br>");
document.write("Area: " + area + "<br>");

// Number Arithmetic (Custom Output)
var number = 8;
document.write("Initial number: " + number + "<br>");
number = number + 5;
document.write("After adding 5: " + number + "<br>");
number = number * 2;
document.write("After multiplication: " + number + "<br>");
number = number - 4;
document.write("Final result: " + number + "<br>");

// Explain Output
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("Result: " + result + "<br>");

// Lifetime Supply Calculator
var snack = "Chips";
var currentAge = 25;
var maxAge = 80;
var perDay = 3;
var totalSnacks = (maxAge - currentAge) * 365 * perDay;
document.write("You will need " + totalSnacks + " " + snack + " to last until the age of " + maxAge + ".<br>");


//File no 1 code End.


//File no 2 Code

// 1. Declare 3 variables in one statement
var var1, var2, var3;


// Legal variable names
var myVar;
var $dollarVar;
var _underscoreVar;
var camelCaseVar;
var variable123;

// Illegal variable names
// var 123variable; // Starts with a number
// var my-var; // Contains a hyphen
// var var; // Reserved keyword
// var @name; // Contains special character '@'
// var space var; // Contains a space

//Rules for naming JS variables
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable.</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example: $name, _name or name.</p>");
document.write("<p>Variable names are case sensitive.</p>");
document.write("<p>Variable names should not be JS keywords.</p>");


//File no 2 Code End.




//File no 3 code

// 1. Declare a variable called age and assign your age
var age = 25;
alert("I am " + age + " years old");

// 2. Visitor's number of visits
var visitCount = 5;
document.write("You have visited this site " + visitCount + " times.<br>");

// 3. Birth Year
var birthYear = 2000;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br>");

// 4. Visitor's Order Information
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.<br>");


//File no 3 code End.


//File no 4 Code 

// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Your Full Name";

// 3. Write a script to:
// a. Declare a JS variable, titled message.
// b. Assign “Hello World” to the variable message.
// c. Display the message in an alert box.
var message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "Ali Khan";
var studentAge = 17;
var studentInstitute = "SSUET";
var studentCourse = "Mobile & Cloud Computing, Module A";
alert("Name: " + studentName);
alert("Age: " + studentAge);
alert("Institute: " + studentInstitute);
alert("Course: " + studentCourse);

// 5. Write a script to display the following alert using one JS variable.
var oneVariableAlert = "This is a sample alert using one variable.";
alert(oneVariableAlert);

// 6. Fortune Teller:
var numChildren = 2;
var partnerName = "Jane Doe";
var geoLocation = "New York";
var jobTitle = "Software Engineer";
alert("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.");

// 7. Declare a variable called email & assign to it a string that represents your Email Address.
var email = "abc@xyz.com";
alert("My email address is " + email);

// 8. Declare a variable called book & give it the value “A smarter way to learn JavaScript”.
var book = "A smarter way to learn JavaScript";
alert("I am learning from the book " + book);

// 9. Use the variables, declared in exercise 4 & show the details giving meaning to data.
alert("My name is " + studentName);
alert("I am " + studentAge + " years old");
alert("I study in " + studentInstitute);
alert("I take " + studentCourse);

// 10. Write a script to display this in browser through JS.
document.write("Hello World! This is JavaScript displayed in the browser.");

//File no 4 Code End.
