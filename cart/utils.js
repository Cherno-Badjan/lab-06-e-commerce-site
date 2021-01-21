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


