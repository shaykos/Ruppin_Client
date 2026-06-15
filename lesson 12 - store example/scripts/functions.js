import { allProducts } from './vars.js';
import Product from './models/product.js';

export function showProducts() {
    let productContainer = document.querySelector('#all_products');

    productContainer.innerHTML = '';

    if(allProducts.length === 0) {
        productContainer.innerHTML = '<p class="no_products">No products yet...</p>';
        return;
    }

    allProducts.forEach(product => {
        productContainer.innerHTML += `
            <div class="product_card">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <p>Price: ${product.price}₪</p>
                <button data-name="${product.name}" class="edit-btn">Edit</button>
            </div>
        `;
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', editProduct);
    });
}

function editProduct(event) {
    let productName = event.target.dataset.name;
    let product = allProducts.find(p => p.name === productName);

    document.querySelector('#name').value = product.name;
    document.querySelector('#category').value = product.category;
    document.querySelector('#price').value = product.price;

    document.querySelector('#form_submit').textContent = 'Update';
}

export function addProduct(event) {
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let category = document.querySelector('#category').value;
    let price = document.querySelector('#price').value;

    let index = allProducts.findIndex(p => p.name === name);

    if(index !== -1) {
        allProducts[index] = new Product(name, category, price);
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
        showProducts();
        event.target.reset();
        document.querySelector('#form_submit').textContent = 'Add';
        return;
    }

    if(name && category && price ) {
        allProducts.push(new Product(name, category, price));
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
        showProducts();
        event.target.reset();
    }
}