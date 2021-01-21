// IMPORT MODULES under test here:
// import { example } from '../example.js';
/*import { findById } from '../cart/utils.js';*/
/*import { cart } from '../cart/cart-data.js';*/
/*import { calcItemTotal } from '../cart/utils.js';*/
import { renderTable } from '../cart/shopping-cart/render-line-items.js';
import { findById } from '../cart/utils.js';


export const shoes = [
    {
        id: 1,
        name: 'Nike',
        image: 'nike.PNG',
        description: 'A just do it Shoe',
        category: 'Athletic',
        price: 60,
    },
    {
        id: 2,
        name: 'Adidas',
        image: 'adidas.PNG',
        description: 'A stripes kind of Shoe',
        category: 'Athletic',
        price: 50,
    },
    {
        id: 3,
        name: 'Puma',
        image: 'puma.PNG',
        description: 'A feline Shoe',
        category: 'Athletic',
        price: 30,
    },
    {
        id: 4,
        name: 'Jordan',
        image: 'jordan.PNG',
        description: 'A last dance kind of Shoe',
        category: 'Athletic',
        price: 300,
    },
    {
        id: 5,
        name: 'Tods',
        image: 'tods.PNG',
        description: 'A driving Shoe',
        category: 'Smart',
        price: 400,
    },
    {
        id: 6,
        name: 'Clarks',
        image: 'clarks.PNG',
        description: 'A proper  Shoe',
        category: 'Smart',
        price: 120,
    },
];

/*const test = QUnit.test;

test('findByID: takes in ID (1) and an array (shoes) and returns item in array with matching ID (Nike)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'Nike',
        image: 'nike.PNG',
        description: 'A just do it Shoe',
        category: 'Athletic',
        price: 60,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, shoes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});*/

/*const test = QUnit.test;

test('Take in cartItem and price and returns total price of cartItem )', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 240;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(4, 60);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});*/

const test = QUnit.test;

test('Take in cart line item and corresponding product and return static HTML data. )', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem1 = [
        {
            id: 1,
            quantity: 4,
        },
    ];

    const nikeShoe = findById(1, shoes);


    const expected = `<tr><td>Nike</td><td>4</td><td>$60</td></tr>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTable(cartItem1[0], nikeShoe);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
