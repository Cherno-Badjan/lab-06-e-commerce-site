// import functions and grab DOM elements
import { shoes } from './shoe.js';
import { renderShoes } from './render.js';

const list = document.getElementById('list');

for (let shoe of shoes) {
    const shoeElement = renderShoes(shoe);

    list.append(shoeElement);
}
// initialize state

// set event listeners to update state and DOM