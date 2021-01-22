// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { calcOrderTotal, findById } from '../cart/utils.js';
import { calcItemTotal } from '../cart/utils.js';
import { renderTable } from '../cart/shopping-cart/render-line-items.js';
import { getCart } from '../cart/cart-utils.js';

const test = QUnit.test;


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

export const cart = [
    {
        id: 1,
        quantity: 4,
    },
    {
        id: 2,
        quantity: 2,
    },
    {
        id: 3,
        quantity: 1,
    },
    {
        id: 4,
        quantity: 2,
    },
];


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
});



test('Take in cartItem and price and returns total price of cartItem )', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 240;

    const item = [
        {
            id: 1,
            quantity: 4,
        },
    ];
    const shoe = [
        {
            id: 1,
            name: 'Nike',
            image: 'nike.PNG',
            description: 'A just do it Shoe',
            category: 'Athletic',
            price: 60,
        },
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(item[0], shoe[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



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


    const expected = `<tr><td>Nike</td><td>4</td><td>$240</td></tr>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTable(cartItem1[0], nikeShoe);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('Take in cart array and products array and return total of products in cart )', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = 970;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cart, shoes);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('Should get cart from local storage', (expect) => {
    const testCart = [
        {
            id: 1,
            quantity: 4,
        },
        {
            id: 2,
            quantity: 2,
        },
        {
            id: 3,
            quantity: 1,
        },
        {
            id: 4,
            quantity: 2,
        },
    ];
    const stringyCart = JSON.stringify(testCart);

    localStorage.setItem('CART', stringyCart);

    const cart = getCart();

    expect.deepEqual(cart, testCart);
});


