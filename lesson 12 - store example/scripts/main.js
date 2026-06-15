
import { showProducts, addProduct } from './functions.js';

window.addEventListener('DOMContentLoaded', showProducts);

document.querySelector('#new_product_form').addEventListener('submit', addProduct);


