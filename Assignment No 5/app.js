// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// document.write("Hello, " + fullName + "!");



// var mobileModel = prompt("Enter your favorite mobile phone model:");
// document.write("The length of your mobilename is: " + mobileModel.length);



// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("The index of 'n' in 'Pakistani' is: " + index);



// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// document.write("Hello, " + fullName + "!");



// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("Modified city name: " + newCity);



// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replaceAll("and", "&"); 
// document.write("Modified message: " + newMessage);



// var strNum = "472";
// var num = parseInt(strNum); // Or use Number(strNum)
// document.write("Value: " + num + " (Type: " + typeof num + ")");


// var url = prompt("Enter a URL :");
// var domain = url.substring(url.indexOf(".") + 1); 
// document.write("Domain name: " + domain);



// var userInput = prompt("Enter a word:");
// document.write( userInput.toUpperCase());



// var num = 35.36;
// var strNum = num.toString().replace(".", ""); 
// document.write("<br>Modified number: " + strNum);




// var a = "3", b = "3";
// var x = a + b; 
// document.write("<br>Value of x: " + x);



// var username = prompt("Enter a username:");
// if (username.includes("!") || username.includes("@") || username.includes(".") || username.includes(",")) {
//     alert("Invalid username. Special characters are not allowed.");
// } else {
//     document.write("<br>Valid username: " + username);
// }





// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Enter an item to search:").toLowerCase();
// if (items.includes(searchItem)) {
//     document.write("<br>" + searchItem + " is available.");
// } else {
//     document.write("<br>" + searchItem + " is not available.");
// }




// var str1 = prompt("Enter first string:");
// var str2 = prompt("Enter second string:");

// if (str1 > str2) {
//     document.write("<br>The first string is greater.");
// } else if (str1 < str2) {
//     document.write("<br>The second string is greater.");
// } else {
//     document.write("<br>Both strings are equal.");
// }





// var password = prompt("Enter a password:");

// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } else if (!isNaN(password.charAt(0))) {
//     alert("Password cannot start with a number.");
// } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     alert("Password must contain both letters and numbers.");
// } else {
//     document.write("<br>Valid password.");
// }





// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = (sentence.toLowerCase().match(/\bthe\b/g) || []).length;

// document.write("<br>Occurrences of 'the': " + count);





// var str = "Pakistan";
// var vowels = (str.match(/[aeiou]/gi) || []).length;
// var consonants = str.length - vowels;

// document.write("<br>Vowels: " + vowels + " | Consonants: " + consonants);




















