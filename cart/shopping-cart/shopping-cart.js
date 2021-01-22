//import { cart } from '../cart-data.js';
import { shoes } from '../shoe.js';
import { calcItemTotal, findById } from '../utils.js';
import { renderTable } from './render-line-items.js';
//import { calcOrderTotal } from '../utils.js';
import { getCart } from '../cart-utils.js';

const tbody = document.querySelector('tbody');

const cart = getCart();


//6. Loop through the cart data and append it to the DOM using the renderTableRow function
let orderTotal = 0;

for (let item of cart) {
    const shoe = findById(item.id, shoes);

    const shoeTotal = calcItemTotal(item, shoe);

    orderTotal = orderTotal + shoeTotal;

    const dom = renderTable(item, shoe);

    tbody.append(dom);

}

//8. Uses the calcOrderTotal function to go through cart data and shoes data and return the total for all products in the cart and then displays order total in the td3. Appends order total to table(dom). 



const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order Total: $${orderTotal}`;
tr.append(td1, td2, td3);
tbody.append(tr);

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart, true, 2));
    localStorage.clear();
    location.href = '../index.html';


    td3.textContent = '';
    tbody.textContent = '';

});

