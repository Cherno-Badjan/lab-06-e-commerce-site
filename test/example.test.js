// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderShoes } from '../products/render.js';

const test = QUnit.test;

test('should take in a shoe and return li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const nike = {
        id: 1,
        name: 'Nike',
        image: 'nike.PNG',
        description: 'A just do it Shoe',
        category: 'Athletic',
        price: 60,
    };

    const expected = `<li class="shoe-item"><p class="shoe-id">1</p><h2 class="shoe-name">Nike</h2><img class="shoe-image" src="assets/nike.PNG"><p class="shoe-description">A just do it Shoe</p><p class="shoe-category">Athletic</p><p class="shoe-price">$60</p><button class="button" value="1">Add to cart</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShoes(nike);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
