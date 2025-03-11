
// var students = [];


// var students = new Array();


// var strings = ["apple", "banana", "cherry"];


// var booleans = [true, false, true];



// var mixed = [1, "apple", true, 3.14];



// var networks = ["Jazz", "Zong", "Telenor", "Ufone"];




// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for (var i = 0; i < qualifications.length; i++) {
//     document.write(qualifications[i] + "<br>");
// }




// var movies = [];
// movies.push("Movie 1", "Movie 2", "Movie 3");

// document.write("Movies: " + movies + "<br>");
// document.write("Length of array: " + movies.length);




// var cars = ["Tesla", "BMW", "Audi", "Mercedes"];

// document.write("First index: " + cars[0] + "<br>");
// document.write("Car at first index: " + cars[0] + "<br>");
// document.write("Last index: " + cars[cars.length - 1] + "<br>");
// document.write("Car at last index: " + cars[cars.length - 1] + "<br>");




// var students = ["Ali", "Sami", "Taha"];
// var scores = [450, 480, 470];
// var totalMarks = 500;

// for (var i = 0; i < students.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
//     document.write(students[i] + " - Score: " + scores[i] + " - Percentage: " + percentage + "%<br>");
// }



// var colors = ["red", "blue", "green"];

// document.write("Initial colors: " + colors + "<br>");

// var colorStart = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorStart);
// document.write("After adding at beginning: " + colors + "<br>");

// var colorEnd = prompt("Enter a color to add at the end:");
// colors.push(colorEnd);
// document.write("After adding at end: " + colors + "<br>");

// colors.unshift("yellow", "purple");
// document.write("After adding two colors at beginning: " + colors + "<br>");

// colors.shift();
// document.write("After deleting first color: " + colors + "<br>");

// colors.pop();
// document.write("After deleting last color: " + colors + "<br>");

// var index = prompt("Enter index to add a color:");
// var color = prompt("Enter color to add:");
// colors.splice(index, 0, color);
// document.write("After adding color at index " + index + ": " + colors + "<br>");

// var deleteIndex = prompt("Enter index to delete color(s):");
// var deleteCount = prompt("Enter how many colors to delete:");
// colors.splice(deleteIndex, deleteCount);
// document.write("After deleting colors: " + colors + "<br>");



// var scores = [450, 480, 470];
// scores.sort((a, b) => a - b);
// document.write("Sorted scores: " + scores + "<br>");



// var cities = ["New York", "Paris", "Tokyo", "London", "Dubai"];
// var selectedCities = cities.slice(0, 3);
// document.write("Selected cities: " + selectedCities + "<br>");



// var arr = ["This", "is", "my", "cat"];
// var str = arr.join(" ");
// document.write("Single string: " + str + "<br>");




// var fifoArray = [];
// fifoArray.push("first");
// fifoArray.push("second");
// fifoArray.push("third");
// document.write("FIFO: " + fifoArray.shift() + ", " + fifoArray.shift() + ", " + fifoArray.shift() + "<br>");



// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select>');
// for (var i = 0; i < phones.length; i++) {
//     document.write('<option>' + phones[i] + '</option>');
// }
// document.write('</select>');



// var multidimensionalArray = [[], [], []];



// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// document.write("Matrix: <br>");
// for (var i = 0; i < matrix.length; i++) {
//     document.write(matrix[i] + "<br>");
// }

