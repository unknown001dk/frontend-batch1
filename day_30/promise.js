// const promise = new Promise( (reslove, reject) => {
//   let success = false;

//   if(!success) {
//     reject("operation Failed");
//     console.log('operation failed');
//     return;
//   }
//   reslove('Operation success!')
//   console.log('opeartion success')
// })

// import { name } from "./name.js";
const { add, sub } = require("./name");

add(12, 78);
sub(10, 5);
