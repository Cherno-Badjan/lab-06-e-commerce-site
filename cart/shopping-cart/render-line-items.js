import { calcItemTotal } from '../utils.js';
//5.Manipulate DOM and creates elements (HTML table elements) to display data.
export function renderTable(cartItem, shoe) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');

    const shoeTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');


    shoeTd.textContent = shoe.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${calcItemTotal(cartItem, shoe)}`;

    tr.append(shoeTd, quantityTd, priceTd);


    return tr;

}