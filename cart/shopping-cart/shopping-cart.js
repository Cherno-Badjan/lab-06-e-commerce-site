import { cart } from '../cart-data.js';
import { shoes } from '../shoe.js';
import { findById } from '../utils.js';
import { renderTable } from './render-line-items.js';
import { calcOrderTotal } from '../utils.js';

const tbody = document.querySelector('tbody');




for (let item of cart) {
    const shoe = findById(item.id, shoes);
    const dom = renderTable(item, shoe);

    tbody.appendChild(dom);

}

const orderTotal = calcOrderTotal(cart, shoes);


const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order Total: $${orderTotal}`;
tr.append(td1, td2, td3);
tbody.append(tr);

