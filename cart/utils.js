/*import { renderTable } from './shopping-cart/render-line-items';*/

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export function calcItemTotal(cartItem, shoe) {

    return cartItem.quantity * shoe.price;
}

let orderTotal = 0;

export function calcOrderTotal(cart, shoes) {

    for (let item of cart) {
        const shoe = findById(item.id, shoes);
        const productTotal = calcItemTotal(item, shoe);

        orderTotal = orderTotal + productTotal;

    }

    return orderTotal;
}
