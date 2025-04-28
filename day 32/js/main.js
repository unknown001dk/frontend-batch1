function getProducts() {
  return JSON.parse(localStorage.getItem("products") || []);
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function showToast(message, icon) {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: icon,
    title: message,
    showConformationButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
}

// home page
const productList = document.getElementById('productList');
if(productList) {
  const products = getProducts();
  const list = document.getElementById('productList');

  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'p-4 bg-white rounded shadow  transition hover:scale-105 flex flex-col gap-2';
    div.innerHTML =  `
      <h2 class='font-bold text-lg text-emerald-500'>${product.name}</h2>  
      <p class='text-gray-600 text-sm'>${product.description}</p>
      <div class='flex gap-2 items-center'>
        <a href='view.html?id=${product.id}' class='bg-blue-500 px-1 py-1 text-white rounded hover:bg-blue-600 transition'>View</a>
        <a href='edit.html?id=${product.id}' class='bg-emerald-500 px-1 py-1 text-white rounded hover:bg-emerald-600 transition'>Edit</a>
        <button onclick="deleteProduct('${product.id}')" class='bg-red-500 px-1 py-1 text-white rounded hover:bg-red-600 transition'>Delete</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function deleteProduct(id) {
  const products = getProducts();
  const updated = products.filter(p => p.id !== id);
  saveProducts(updated);
  showToast('Deleted Successfully!', "error");
  setTimeout(() => location.reload(), 1500);
}

// add page
const addForm = document.getElementById("add-form");
if (addForm) {
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    const products = getProducts();
    products.push({
      id: generateId(),
      name,
      description,
    });
    saveProducts(products);
    showToast("Added Successfully!", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });
}

// view page
const productDetails = document.getElementById('product-details');
if(productDetails) {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id');

  const products = getProducts();
  const product = products.find(p => p.id === id);
  if (product) {
    productDetails.innerHTML = `
      <h2 class='text-2xl font-bold text-emerald-600'>${product.name}</h2> 
      <p class='text-gray-700 mt-2 mb-6'>${product.description}</p>
      <a class='mt-6 bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600' href='index.html'>Back to home</a> 
    `
  }
}

// edit page 
const editForm = document.getElementById('edit-form');
if(editForm) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const products = getProducts();
  const product = products.find(p => p.id === id);
  if(product) {
    document.getElementById('edit-product-name').value = product.name;
    document.getElementById('edit-product-description').value = product.description;

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      product.name= document.getElementById('edit-product-name').value;
      product.description = document.getElementById('edit-product-description').value;
      saveProducts(products);
      showToast("Updated SuccessFully!", 'info');
      setTimeout(() => window.location.href = 'index.html', 1500)
    })
  }
}