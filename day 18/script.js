// objects
// key - name, value - Dinesh

// const obj1 = {
//   name: "Dinesh",
//   age: 21
// };

// console.log(obj1)

// console.log(obj1.name)
// console.log(obj1.age)

// const obj2 = {
//   firstName: "Dinesh",
//   lastName: "Kumar",
//   age: 21,
//   isStudent: true,
// }

// obj2.clg = "ABC College";

// console.log(obj2)

// delete obj2.isStudent;

// console.log(obj2)

// console.log(obj2.firstName) // Dinesh

// obj2.firstName = "Dinesh-update"
// obj2.age = 31

// console.log(obj2.firstName) // Dinesh-update

// nesteed object

// const obj3 = {
//   name: "Dinesh",
//   age: 21,
//   books: ["book", "note"]
// };

// console.log(obj3.books[1])

// destucturing

// let { name, age } = obj3;
// console.log(name)

// name = "dk";

// console.log(obj3)

// console.log(obj3.address.country)
// delete obj3.address.country;
// console.log(obj3)

// console.log(obj3.address.data.area)

// obj3.address.data.area = "Karur"

// console.log(obj3.address.data.area)

// arrays

// const hobbies = ["reading", "writing", "coding", ["value", "dk", [1, 4]], 21, true];

// // flat
// const flatArray = hobbies.flat(2);

// console.log(flatArray)

// const arr2 = ["playing", "sleeping", "walking"];

// const arr3 = [1, 2, 3, 4, 5];

// const addedArray = hobbies.concat(arr2, arr3);

// console.log(addedArray)

// hobbies.push("playing")
// console.log(hobbies)
// hobbies.pop()

// console.log(hobbies)

// console.log(hobbies.length)

// console.log("before update:", hobbies)

// console.log(hobbies[4])

// reading --> playing
// console.log(hobbies.toString())

// hobbies[0] = "playing"

// console.log("after update: ", hobbies)

// date object

// const date = new Date();
// console.log(date)

// console.log(date.getDate()) // 18
// console.log(date.getMonth()) // 0-11 n - 1
// console.log(date.getFullYear())

// console.log(date.getDay()) // sunday - 0, monday - 1, tuesday - 2, wednesday - 3, thursday - 4, friday - 5, saturday - 6

// console.log(date.getHours()) // 0-23

// console.log(date.getMinutes()) // 0-59
// console.log(date.getSeconds()) // 0-59

// functions

// function declaration
// function functionName(parameter1, parameter2) {}

// function add(a, b) {
//   let result = a + b;
//   return result;
// }

// // function calling
// // functionName(argument1, argument2)
// console.log(add(2, 3));

// function sub(a, b) {
//   return a - b;
// }

// console.log(sub(10, 3))

// // 10 * 13 = 130

// function mul(a, b) {
//   return a * b;
// }
// console.log(mul(12, 12))

// function square(a) {
//   return a * a;
// }
// console.log(square(5))

// for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// multiplication table

// for (let i = 1; i <= 10; i++) {
//   console.log("2 *", i, "=", 2 * i)
// }

// function multiplicationTable(n, m) {
//   for (let i = 1; i <= m; i++) {
//     console.log(i, "*", n, "=", n * i)
//   }
// }

// multiplicationTable(4, 20)
// multiplicationTable(2, 10)

// patterns
// 1. square pattern

// const n = 5;
// let str = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     str += "* ";
//   }
//   str += "\n";
// }
// console.log(str);

// 2. right angle triangle pattern

// const n = 5;
// let str = "";
// for(let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     str += "* ";
//   }
//   str += "\n";
// }
// console.log(str);

// function rightAngleTriangle(n) {
//   let str = "";
//   for(let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       str += "* ";
//     }
//     str += "\n";
//   }
//   console.log(str);
// }

// rightAngleTriangle(5);
// rightAngleTriangle(1);

// left angle triangle pattern

// const n = 5;
// let str = "";
// for(let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     str += "* ";
//   }
//   str += "\n";
// }
// console.log(str);

// pramid pattern

const n = 5;
let str = "";
for(let i = 0; i < n; i++) {
  for (let j = n - i; j > 1; j--) {
    str += " ";
  }
  for (let k = 0; k <= i; k++) {
    str += "* ";
  }
  str += "\n";
}
console.log(str);