import { addToCart } from '../cart/cart-utils.js';

export function renderShoes(shoes) {



    const li = document.createElement('li');
    li.classList.add('shoe-item');


    const h2 = document.createElement('h2');
    h2.classList.add('shoe-name');
    h2.textContent = shoes.name;
    li.append(h2);

    const img = document.createElement('img');
    img.classList.add('shoe-image');
    li.append(img);
    img.src = `../assets/${shoes.image}`;

    const pDescription = document.createElement('p');
    pDescription.classList.add('shoe-description');
    pDescription.textContent = shoes.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.classList.add('shoe-category');
    pCategory.textContent = shoes.category;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.classList.add('shoe-price');
    pPrice.textContent = `$${shoes.price}`;
    li.append(pPrice);

    const div = document.createElement('div');
    div.classList.add('input-button');
    li.append(div);

    const quantInput = document.createElement('input');
    quantInput.type = 'number';
    quantInput.min = 1;
    div.append(quantInput);



    const button = document.createElement('button');
    button.addEventListener('click', () => {
        const quantity = quantInput.valueAsNumber;
        addToCart(shoes.id, quantity);
        quantInput.value = '';

    });
    button.textContent = 'Add to cart';
    li.append(button);

    return li;

}