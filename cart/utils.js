//3.Uses the ID from the cart array to match to id in shoes array and return item(shoe).
export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

//4.Uses cart quantity and shoe price to give total of a products in cart
export function calcItemTotal(cartItem, shoe) {

    return cartItem.quantity * shoe.price;
}

//7: Looping through the cart/shoe data using the calcItemTotal function to return item totals and then using the calcOrderTotal to return the cart total

let orderTotal = 0;

export function calcOrderTotal(cart, shoes) {

    for (let item of cart) {
        const shoe = findById(item.id, shoes);
        const productTotal = calcItemTotal(item, shoe);

        orderTotal = orderTotal + productTotal;

    }

    return orderTotal;
}
