const products = [
  { id: 1, name: "Wireless mouse", price: 899 },
  { id: 2, name: "keyboard", price: 1200 },
  { id: 3, name: "mobile", price: 3000 },
  { id: 4, name: "shoe", price: 700},
  { id: 5, name: "Apple", price: 250},
];

const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const toatlPrice = document.getElementById('toatlPrice');

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(product){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  showToast('Item added to cart');
  renderCart();
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartItems.innerHTML = "";
  let total = 0;

  if(cart.length === 0 ) {
    cartItems.innerHTML = `
      <p>Your cart is Empty</p>
    `
  }
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML =  `
      <h4>${item.name}</h4>
      <p>${item.price}</p>
    `;
    cartItems.appendChild(div);
    console.log(item);
    total += item.price;
  });
  toatlPrice.textContent = `Total: ₹${total}`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000)// 3 seconds
}

function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}

renderProducts();
renderCart();
