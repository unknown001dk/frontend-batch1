// for in loop

let obj1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// console.log(obj1.firstName);
// console.log(obj1["firstName"]);

// for (let key in obj1) {
//   console.log(key, obj1[key]);
// }

const obj2 = {
  username: "dinesh",
  age: 25,
  isMarried: false,
};

obj2["username"]; // dinesh

for (let name in obj2) {
  console.log(obj2[name]);
}

const obj3 = {
  name: "dinesh",
  age: 25,
  isMarried: false,
};

for (let a in obj3) {
  console.log(obj3[a]);
}

// for of loop

const arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
}

const subjects = ["Tamil", "English", "Maths", "Science", "Social"];

for (let sub of subjects) {
  console.log(sub);
}

const marks = [98, 99, 100, 95, 96];

for (let mark of marks) {
  console.log(mark);
}

// foreach

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(element => {
//   console.log(element)
// });

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// break and continue

for (let i = 1; i < 10; i++) {
  if (i == 3) {
    // console.log("number 3 reached")
    continue;
  }
  console.log(i);
}

// map
// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = new Map([
//   ["name", "dinesh"],
//   ["age", 25],
//   ["isMarried", false],
// ]);

// console.log(arr2.get("age"))

// console.log(arr2.get("name"));

// const arr2 = arr1.map((num) => {
//   return num * 2;
// });

const person = new Map();

person.set("name", "dinesh");
person.set("age", 25);

console.log(person.get("name"));

const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.map((number) => {
  return number * 2;
});

console.log(arr2);
// debugger;

// arrow function

// function declaration
const myFunction = () => {
  console.log("My function")
};

// function call
myFunction();

// function declare

function add(a, b) {
  console.log(a + b);
}

// function call
add(10, 34);

// class

class maths {
  // methods or functions
  add(num1, num2) {
    return num1 + num2;
  }
  sub(num1, num2) {
    return num1 - num2;
  }
}

// instance or craete object
const math = new maths();

console.log(math.add(10, 20)); 

class person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

const person2 = new person1("dinesh", 25);

console.log(person2.getAge()); // dinesh

// function Name() {
//   firstName
// }

const name = {
  firstName: "dinesh",
  lastName: "kumar",
  getFullName: (firstName, lastName) => {
    return this.firstName + " " + this.lastName;
  }
}

console.log(name.getFullName())

// 1 way
for(let i = 1; i <= 10; i++){
  console.log(i)
}
// 1. better 
// 2. performance

// 2 way
const number = 10;
for(let i = 1; i <= number; i++){
  console.log(i)
}

// 3 way
function loop(number){
  for(let i = 1; i <= number; i++){
    console.log(i)
  }
}
loop(10)

// const array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i++){
  console.log(array[i])
}
const array = [1, 2, 3, 4, 5]
const length = array.length;
const array2 = [1, 2, 3, 4, 5]
const length2 = array.length;
for(let i = 0; i < length; i++){
  console.log(array[i])
}
for(let i = 0; i < length2; i++){
  console.log(array[i])
}

function loop(array){
  const length = array.length;
  for(let i = 0; i < length; i++){
    console.log(array[i])
  }
}
loop([1, 2, 3, 4, 5])
loop([8, 2, 3, 4, 5])