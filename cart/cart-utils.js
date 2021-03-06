import { findById } from '../cart/utils.js';

const CART = 'CART';

const defaultEmptyCart = [];

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    } else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);

        return defaultEmptyCart;
    }
}

export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringyDefaultCart);
}

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id, input) {
    const cart = getCart();

    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity += input;
    } else {
        const newShoe = {
            id: id,
            quantity: input
        };
        cart.push(newShoe);
    }
    setCart(cart);

}
