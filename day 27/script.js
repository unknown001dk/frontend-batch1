// const obj = {
//   // key : value
//   name: "dk",
//   age: 21,
//   email: "dk@example.com",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345",
//   },
// };

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }


// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// for (let j = 52; j > 13; j--) {
//   console.log(j);
// }

// console.log(obj["name"])

// for in
// for (let key in obj) {
//   console.log(obj[key])
// }

// console.log(obj)

// obj.age = 32;
// obj.test = "working";

// console.log(obj)

// delete obj.test;

// console.log(obj)

// json
// stringify
// parse

// const json_stringify = JSON.stringify(obj)
// console.log(json_stringify)

// const json_parse = JSON.parse(json_stringify);
// console.log(json_parse)


// array

const arr1 = [1, 2, 3, 4, 5];

// filter 
const numbers = arr1.filter(num => num % 2 === 0);

// console.log(numbers)

// arr1.push(6)

// arr1.push(5)

// arr1.pop()
// console.log(arr1)

// for of
// for ( const element of arr1 ) {
//   console.log(element);
// }

// for each
// arr1.forEach(e => {
//   console.log(e)
// })

const arr2 = ["dk", "dinesh", "kumar", "dineshkumar"];

// find
const foundElement = arr2.find(e => e.startsWith("d"));


// console.log(foundElement)

// 20% > 5000
// 10% > 2000
// no discount

function calculateDiscount(totalAmount) {
  let discount = 0;

  if( totalAmount > 5000) {
    discount = totalAmount * 0.2;
  } else if( totalAmount >= 2000) {
    discount = totalAmount * 0.1;
  } else {
    discount = 0;
  }

  const finalAmount = totalAmount - discount;
  console.log(`Total Amount: ${totalAmount}`);
  console.log(`Discount: ${discount}`);
  console.log(`Final Amount: ${finalAmount}`);
}

calculateDiscount(6000);
console.log("=================================")
calculateDiscount(3000)
console.log("=================================")
calculateDiscount(1500)