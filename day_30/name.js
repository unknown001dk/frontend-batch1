// function name() {
//   console.log("dk");
// }

// module.exports = { name };

// // name()

function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

module.exports = { add, sub };

const category = [23, 2, 6, 1, 54, 89, 5, 233];

// const result = category.includes('beauty')
// console.log(result)

// console.log(category.sort((a, b) => b-a ));

// console.log(category.reverse())

const word = "hello"; // olleh

const result = word.split("").reverse().join("");

// console.log(result);

const numbers = [23, 4, 45, 2, 20];

// const min = Math.min(...numbers)
// console.log(min)

// loop for
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min)

const min = numbers.reduce((a, b) => (a < b ? a : b));

console.log(min)
