
export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export function calcItemTotal(cartItem, price) {

    const shoeTotal = cartItem * price;
    return shoeTotal;

}


