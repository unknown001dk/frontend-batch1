const products = [
  { id: 1, name: 'Wireless Earbuds', price: 100, category: 'electronics', img: '../assets/images/e-com/ear-buds.jpg'},
  { id: 2, name: 'Bluetooth Speaker', price: 150, category: 'electronics', img: '../assets/images/e-com/speaker.jpg'},
  { id: 3, name: 'Smartwatch', price: 200, category: 'electronics', img: '../assets/images/e-com/smartwatch.jpg'},
  { id: 4, name: 'Laptop', price: 1200, category: 'electronics', img: '../assets/images/e-com/laptop.jpg'},
  { id: 5, name: 'Tablet', price: 600, category: 'electronics', img: '../assets/images/e-com/tablet.jpg'}, 
  { id: 6, name: 'jeans', price: 300, category: 'fashion', img: '../assets/images/e-com/jeans.jpg'},
  { id: 7, name: 'Sneakers', price: 120, category: 'fashion', img: '../assets/images/e-com/sneakers.jpg'},
  { id: 8, name: 'T-shirt', price: 25, category: 'fashion', img: '../assets/images/e-com/tshirt.jpg'},
  { id: 9, name: 'Dress', price: 80, category: 'fashion', img: '../assets/images/e-com/dress.jpg'},
  { id: 10, name: 'Jacket', price: 150, category: 'fashion', img: '../assets/images/e-com/jacket.jpg'}
];

let filterProducts = [...products];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let page = 1;
const perPage = 4;

const productList = document.getElementById('productList');
const cartCount = document.getElementById('cartCount');
const pageNum = document.getElementById('pageNum');

function renderProducts() {
  const start = ( page - 1) * perPage;
  const end = start + perPage;
  const paginated = filterProducts.slice(start, end);
  productList.innerHTML = "";
  paginated.forEach( product => {
    console.log(product.img)
    productList.innerHTML += `
      <div class='bg-white p-4 rounded shadow-md mt-10 flex flex-wrap w-1/2'>
        <img src='${product.img}' class='w-full h-40 object-cover mb-2 rounded' />
        <h3 class='text-lg font-semibold'>${product.name}</h3><br>
        <p class='text-gray-700'>${product.price} </p>
        <button onclick="addToCart(${product.id})" class='mt-2 bg-blue-500  text-white px-3 py-1 rounded hover:bg-blue-700'>Add to Cart</button>
      </div>
    `;
    pageNum.textContent = page;
  })
}

function addToCart(id) {
  // const some = products
  // console.log(...some.find(parseFloat(id)))
  const product = products.find( p => p.id === id);
  const exists = cart.find(item => item.id === id);
  if(exists) exists.qty += 1;
  else cart.push({...product, qty: 1});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// event listeners
// search
document.getElementById('search').addEventListener('input', e => {
  const keyword = e.target.value.toLowerCase();
  filterProducts = products.filter(p => p.name.toLowerCase().includes(keyword))
  // filterProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
  page = 1;
  renderProducts();
})

// filter
document.getElementById('filter').addEventListener('change', e => {
  const category = e.target.value;
  filterProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
  page = 1;
  renderProducts();
});

// nextpage
document.getElementById('nextPage').addEventListener('click', () => {
  if ((page * perPage) < filterProducts.length) {
    page++;
    renderProducts();
  }
})

// previous page
document.getElementById('prevPage').addEventListener('click', () => {
  if (page > 1) {
    page--;
    renderProducts();
  }
});

// modal logics
document.getElementById('loginBtn').addEventListener('click', () => {
  document.getElementById('loginModal').classList.remove('hidden', 'optacity-0');
  document.getElementById('loginModal').classList.add('flex');
})

document.getElementById('showRegister').addEventListener('click', () => {
  document.getElementById('loginModal').classList.add('hidden');
  document.getElementById('registerModal').classList.remove('hidden', 'opacity-0');
})

document.getElementById('showLogin').addEventListener('click', () => {
  document.getElementById('registerModal').classList.add('hidden');
  document.getElementById('loginModal').classList.remove('hidden', 'opacity-0');
})

renderProducts();
updateCartCount();
