// string
// toUpperCase
// toLowerCase
// length
// cancat
// trim
// trimstart
// trimend

// const str1 = "DINESH";
// console.log(str1.length);

// let str1 = "Dinesh";
// let str2 = "Kumar";

// // console.log(str1+ " " +str2)

// let str3 = str1.concat(" ", str2)

// console.log(str3);

// let str4 = "            Hashstart academy                ";

// console.log(str4.trim())

// numbers
// 1. toString
// 2. toFixed

// let num = 10.25;

// console.log(    typeof(num)     )

// let str1 = "1";   // string
// let num = 1;    // number   to string  === toString()
// console.log(typeof(num.toString()))
// // string + number = string

// let sum = str1 + num;
// console.log(typeof(sum)) // o/p -->  string

// let number = 106.46;

// console.log(number.toFixed())

// conditional statements

// let firstname = "    Kumar";
// const password = "ydfg";
// // method channing
// firstname = firstname.trim().toLowerCase();

// console.log(firstname)

// 1. marks

// const marks =  "string";

// if( marks >= 90 ) {
//   console.log("Grade A")
// } else if (marks >= 70 ) {
//   console.log("Grade B")
// } else if( marks >= 50 ) {
//   console.log("Grade C")
// } else if ( marks < 35 ) {
//   console.log("You Falied. No worry!")
// } else {
//   console.log("Invalid Format!")
// }

// 2. eligible to vote

// const myAge = 1;

// if (myAge >= 18 ) {
//   console.log("You are elgibile to vote!")
// } else {
//   console.log("Your age is low")
// }

// 3.
// const isUserLoggedIn = false;

// if (isUserLoggedIn) {
//   console.log("User Logged!")
// } else {
//   console.log("User not logged!")
// }

// 4. find number odd or even

// const number = 31;

// if ( number % 2 === 0) {
//   console.log("Even Number")
// } else {
//   console.log("Odd number");
// }

// 5 .greater than or less than

// const number = 11;

// if ( number > 20 ) {
//   console.log("Greater number");
// } else {
//   console.log("Smaller number");
// }

// 6. leap year or not

// if( year % 4 === 0) {
//   console.log("Leap year")
// } else {
//   console.log("Not a Leap Year")
// }

// switch

// const marks = "45";

// switch (true) {
//   case (marks >= 90):
//     console.log("Grade A");
//     break;
//   case (marks >= 70):
//     console.log("Grade B");
//     break;
//   case (marks <= 50):
//     console.log("Fail");
//     break;
//   default:
//     console.log("Not Valid!");
//     break;
// }

// const number = 1;

// switch (number) {
//   case 1:
//     console.log("1");
//     break;

//   default:
//     break;
// }

// terinary operator
// if (age>=18) {
//   console.log("Eligible")
// } else {
//   console.log("Not eligible");
// }


// condition ? true : false

// const age = 11;
// const result = (age >= 18) ? "Eligible" : "Not Eligible";

// console.log(result);


// comparison operator
 // 1. ==   (value)
 // 2. ===   (value and type)
 // 3. !=  (value)
 // 4. !== (value and type)
 // 5. > (greater than)
 // 6. < (less than)
 // 7. >= 
 // 8. <=
 // 9. ! (not)
 // 10. && (and)
 // 11. || (or)

// const str1 = "23";
// const num = 23;

// console.log( str1 !== num )

// let a  = 10;
// let b = 12;

// console.log( a>10  || b<15)

// let a = 16.91;

const result = Math.floor(Math.random() * 10);

console.log(result)


const otp = Math.floor(1000 + Math.random() * 9999)
console.log(otp);
