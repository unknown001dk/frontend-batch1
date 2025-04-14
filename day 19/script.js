// function

// function myFunction(parameter) {
//   console.log("My function excuted!");
// }

// myFunction(arguments);

// // arrow function
// // declare
// const add = () => {
//   console.log("Arrow function executed!");
// };

// // call
// add()

// for loop
// starting point; conditon, increment/decrement
//( let num = 0; num <10; num++)

// for ( let num = 0; num < 10; num++){
//   console.log(num);
// }

// for (let i = 0; i < 5; i++) {
//   let pattern = "";
//   for (let j = 0; j < 5; j++) {
//     pattern += "*";
//   }
//   console.log(pattern)
// }

// right angle triangle
// console.log("person 1")
const n = 10;

// for (let i = 1; i <= n; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// console.log("person 2")

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

function rightAngleTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

rightAngleTriangle(10)
// rightAngleTriangle(5)

// invert triangle

function invertTraingle(n) {
  for (let i = 5; i >= 1; i--) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// invertTraingle(5)

// square triangle

// function squareTriangle(n, m) {
//   for (let i = 1; i <= m; i++) {
//     let pattern = "";
//     for (let j = 1; j <= n; j++) {
//       if( i === j) {
//         pattern += "*";
//       } else {
//         pattern += " ";
//       }
//     }
//     console.log(pattern);
//   }
// }

// squareTriangle(5, 5);

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= 5; j++) {
//     if( i === j) {
//       pattern += "*";
//     } else {
//       pattern += " ";
//     }
//   }
//   console.log(pattern);
// }

const marks = [78, 45, 30, 34, 50];
const length = marks.length;
let total = 0;

for (let i = 0; i < length; i++) {
  total += marks[0];
}

// console.log(total);

// const average = total / length;
// console.log(average)

// tables
// const number = 3;
// console.log("number is ", number);

// for (let i = 1; i <= 10; i++) {
//   console.log(i, "*", number, "=", i * number);
//   console.log(`${i} * ${number} = ${i * number}`);
// }

// function tables(number, m) {
//   for (let i = 1; i <= m; i++) {
//     console.log(`${i} * ${number} = ${i * number}`);
//   }
// }

// tables(3, 20);

// tables(5, 10);

// while loop

// let i = 1;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// let password = "dk";

// let UserInput = "";

// while( UserInput !== password) {
//   UserInput = prompt("Enter your password: ");
//   console.log("wrong password"); 
// }
// console.log("Correct password");

// let number = 1234;

// let reverse = 0;

// while(number > 0) {
//   let digit = number % 10;
//   reverse = reverse * 10 + digit;
//   number = Math.floor(number / 10);
// }
// // console.log(reverse);
// console.log("reverse number is ", reverse);

// let coutdown = 20;

// while(coutdown >= 0) {
//   console.log("Time left: ", coutdown);
//   coutdown--;
// }
// console.log("Finished");

let coutdown = 20;

function startCoutdown() {
  if (coutdown >= 0) {
    console.log("Time Left: ", coutdown);
    coutdown--;
    // debugger;
    setTimeout(startCoutdown, 1000);
  } else {
    console.log("Finished!")
  }
}
startCoutdown()