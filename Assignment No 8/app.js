// // Assignment #38-44: JavaScript Functions, Switch Statements, Loops

// // 1. Power function
// // def power(a, b) {
// //   return Math.pow(a, b);
// // }

// // 2. Leap year checker
// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// // 3. Triangle area using two functions
// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }

// function triangleArea(a, b, c) {
//   var S = calculateS(a, b, c);
//   return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// // 4. Student marks with average and percentage
// function average(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }

// function percentage(m1, m2, m3) {
//   return ((m1 + m2 + m3) / 300) * 100;
// }

// function mainFunction(m1, m2, m3) {
//   console.log("Average:", average(m1, m2, m3).toFixed(2));
//   console.log("Percentage:", percentage(m1, m2, m3).toFixed(2) + "%");
// }

// // 5. Custom indexOf for single character
// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) return i;
//   }
//   return -1;
// }

// // 6. Remove all vowels from a sentence
// function removeVowels(sentence) {
//   return sentence.replace(/[aeiouAEIOU]/g, "");
// }

// // 7. Count successive vowels
// function countSuccessiveVowels(str) {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length - 1; i++) {
//     switch (str[i] + str[i + 1]) {
//       case "aa": case "ae": case "ai": case "ao": case "au":
//       case "ea": case "ee": case "ei": case "eo": case "eu":
//       case "ia": case "ie": case "ii": case "io": case "iu":
//       case "oa": case "oe": case "oi": case "oo": case "ou":
//       case "ua": case "ue": case "ui": case "uo": case "uu":
//         count++;
//         break;
//     }
//   }
//   return count;
// }

// // 8. Distance conversions
// function toMeters(km) {
//   return km * 1000;
// }

// function toFeet(km) {
//   return km * 3280.84;
// }

// function toInches(km) {
//   return km * 39370.1;
// }

// function toCentimeters(km) {
//   return km * 100000;
// }

// // 9. Overtime pay calculator
// function calculateOvertime(hoursWorked) {
//   if (hoursWorked > 40) {
//     return (hoursWorked - 40) * 12;
//   } else {
//     return 0;
//   }
// }

// // 10. Currency note distribution
// function currencyNotes(amount) {
//   let hundreds = Math.floor(amount / 100);
//   let remainder = amount % 100;
//   let fifties = Math.floor(remainder / 50);
//   remainder = remainder % 50;
//   let tens = Math.floor(remainder / 10);

//   return {
//     hundreds,
//     fifties,
//     tens
//   };
// }
