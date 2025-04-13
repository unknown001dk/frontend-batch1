// command line ctrl + /
// console.log("Hello world!")

// variables
  // var, let, const
  // var --> globally
  // let , const --> only excutes in block

// var a = 10;
// a = 15;

// let b = 20;
// b = 25;
// const c = 30;

// let num = 12;
// console.log(num);
// {
//   console.log(num);
// }


// operators
  // 1. assignment operator ( =, +=, -=, *=, /=, %=, **= )
  // 2. arithmetic operator ( +, -, *, /, %, **, ++, --)
  // 3. comparsion 
  // 4. logical
  // 5. bitwise
  // 6. ternary operator
  // 7. type operators

// let a = 2;
// let b = 3;
// let sum = a + b;
// console.log(sum)

// addition
// let sum = a + b;
// console.log(sum)

// let sub = a % b;
// console.log(sub)


// let num = 12;

// num %= 10; // num = num / 10

// console.log(num)

// data types
  // 1. string
  // 2. number
  // 3. boolean
  // 4. undefined
  // 5. null
  // 6. object
  // 7. array

// sting
const name = 'diensh';
console.log(typeof(name))

// number 
let a = 10.255488;
console.log(  typeof(a)    );

// boolean (true, flase)
let b = false ;
console.log(typeof(b));

// undefined

const number = undefined;
console.log(number)

// null 
const null_1 = null;
console.log(null_1);

// objects
const details = {
  name : "dinesh",
  age: 12
}

console.log(typeof(details))

// array 
const myArray = [1, 2, 3]
console.log(myArray);
console.log(typeof(myArray));


// string
  // 1. name - small letters
  // 2. myName - camel case letters
  // 3. MyName - words starts with captial 
// ctrl + alt + n
// let myName = 'It\s my pleasure'
// console.log("My name is", myName);

// const name1 = "9";
// const name2 = 9;

// console.log(name1 == name2)
// console.log(name1 === name2)


const myName = "Dineshkumar";

const length = myName.length;
console.log(length)
console.log(myName[0])

const captial = myName.toUpperCase();
console.log(captial)
const lower = myName.toLowerCase();
console.log(lower)

// real time example

const userRole = "StudentControl";

console.log( userRole.toLowerCase() === 'studentcontrol')