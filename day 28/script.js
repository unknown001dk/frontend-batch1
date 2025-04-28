// const products = [
//   { id: 1, name: "Mobile", price: 566, category: "electronics" },
//   { id: 2, name: "Keyboard", category: "electronics" },
//   { id: 3, name: "HeadPhones", category: "electronics" },
//   { id: 4, name: "Mouse", category: "electronics" },
//   { id: 5, name: "jeans", category: "fashion" },
//   { id: 6, name: "shirt", category: "fashion" },
//   { id: 7, name: "T-shirt", category: "fashion" },
//   { id: 8, name: "dress", category: "fashion" },
// ];

// const productList = document.getElementById("productList");
// let filterProducts = [...products];

// function renderProducts() {
//   productList.innerHTML = "";
//   filterProducts.forEach((product) => {
//     productList.innerHTML += `
//       <div class='card center'>
//         <h1>${product.name}</h1>
//       </div>
//     `;
//   });
// }

// document.getElementById("search").addEventListener("input", (event) => {
//   const keyword = event.target.value.toLowerCase();
//   console.log(keyword);
//   filterProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(keyword)
//   );
//   renderProducts();
// });

// document.getElementById("filter").addEventListener("change", (e) => {
//   const category = e.target.value;
//   console.log(category);
//   filterProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
//   console.log(filterProducts);
//   renderProducts();
// });

// renderProducts();

// const Books = [
//   { id: 1, name: "Ponniyan selvan", journal: "real" },
//   { id: 2, name: "Mahabharatham", journal: "friction" },
//   { id: 3, name: "Ramayanam", journal: "friction" },
//   { id: 4, name: "Vel paari", journal: "real" },
//   { id: 6, name: "bcsdhg", journal: "real" },
//   { id: 5, name: "Silabhathikaram", journal: "real" },
//   { id: 6, name: "bcsdhg", journal: "real" },
// ];

// const bookList = document.getElementById('bookList');
// const filterBooks = [...Books];

// function renderBooks(){
//   bookList.innerHTML = '';
//   filterBooks.forEach( book => {
//     bookList.innerHTML += `
//       <h1>${book.name}- ${book.journal}</h1>
//     `
//   })
// }

// renderBooks();

// function welcome(name) {
//   console.log("hello",name)
// }

// // welcome();

// function user(callback) {
//   const name = "dk";
//   callback(name);
// }

// user(welcome)

// const obj = {
//   name: "dinesh",
//   age: 21,
//   address: {
//     street: "my street"
//   }
// }
// Object.freeze(obj)
// Object.freeze(obj.address)

// console.log(obj)

// // edit
// obj.address.street = "dineshkumar";
// console.log(obj)

// // add
// obj.gender = "male";
// console.log(obj)

// // delete
// delete obj.gender;
// console.log(obj)

// function fetchData() {
//   return new Promise((reslove) => {
//     setTimeout(() => {
//       reslove("Data received!");
//     }, 2000);
//   });
// }

// async function getData() {
//   try {
//     console.log("Fetching...");
//     const data = await fetc6hData();
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", error.message);
//   }
// }

// getData();


console.log(window.location.hostname)