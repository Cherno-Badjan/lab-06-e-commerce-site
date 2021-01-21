

export function renderTable(cartItem, shoe) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');

    const shoeTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');


    shoeTd.textContent = shoe.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${shoe.price}`;

    tr.append(shoeTd, quantityTd, priceTd);
    console.log(tr);
    console.log(quantity);

    return tr;

}