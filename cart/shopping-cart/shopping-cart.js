import { cart } from '../cart-data.js';
import { shoes } from '../shoe.js';
import { findById } from '../utils.js';
import { renderTable } from './render-line-items.js';

const tbody = document.querySelector('tbody');



for (let item of cart) {
    const shoe = findById(item.id, shoes);
    const dom = renderTable(item, shoe);

    tbody.appendChild(dom);

}


