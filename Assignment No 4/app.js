// for (var i = 0; i < 5; i++) {
//     document.write("Hello World <br>");
// }


// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


// var number = prompt("Enter a number:");
// var length = prompt("Enter the length of the table:");

// for (let i = 1; i <= length; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for (let i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br>");
// }


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }


// var N = prompt("Enter the number of items:");
// var items = [];

// for (let i = 0; i < N; i++) {
//     items[i] = prompt("Enter item " + (i + 1) + ":");
// }

// document.write("You entered: <br>");
// for (var i = 0; i < items.length; i++) {
//     document.write(items[i] + "<br>");
// }



// document.write("Counting: ");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<br>Reverse Counting: ");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<br>Even: ");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br>Odd: ");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br>Series: ");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Enter item to search:");

// if (A.includes(searchItem)) {
//     document.write(searchItem +  " is available!");
// } else {
//     document.write(searchItem + " is not available!");
// }


// var A = [24, 53, 78, 91, 12];
// var max = Math.max(...A);

// document.write("Largest number is: " + max);



// var A = [24, 53, 78, 91, 12];
// var max = Math.max(...A);
// var min = Math.min(...A);

// document.write("Largest: " + max + "<br>");
// document.write("Smallest: " + min);



// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ", ");
// }


// var students = ["Alal", "azan", "Tanzel", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write("<table border='1'><tr><th>Name</th><th>Score</th></tr>");
// for (var i = 0; i < students.length; i++) {
//     document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>");
// }
// document.write("</table>");



// var scores = [12, 45, 3, 22, 34, 50];
// let stopValue = prompt("Enter stop value:");
// for (let i = 0; i < scores.length; i++) {
//     document.write(scores[i] + " ");
//     if (scores[i] == stopValue) break;
// }



// var A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//         document.write(A[i][j] + " ");
//     }
//     document.write("<br>");
// }




let lines = prompt("Enter number of lines:");


document.write("Pattern A<br>");
for (let i = 0; i < lines; i++) {
    for (let j = 0; j < 5; j++) {
        document.write("*");
    }
    document.write("<br>");
}


document.write("Pattern B<br>");
for (let i = 1; i <= lines; i++) {
    document.write("*".repeat(i) + "<br>");
}


document.write("Pattern C<br>");
for (let i = lines; i > 0; i--) {
    document.write("*".repeat(i) + "<br>");
}

