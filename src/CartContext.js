// CartContext.js
import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return state.map(item => item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item);
        case 'REMOVE_ITEM':
            return state.map(item => item.id === action.payload.id && item.quantity > 0
                ? { ...item, quantity: item.quantity - 1 }
                : item);
        case 'INIT_CART':
            return action.payload;
        default:
            return state;
    }
};

export const CartProvider = ({ children, products }) => {
    const [cart, dispatch] = useReducer(cartReducer, products.map(product => ({ ...product, quantity: 0 })));

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
