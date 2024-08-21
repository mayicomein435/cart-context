// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';
import productsData from './products.json'; // Your JSON file location

const App = () => {
    return (
        <CartProvider products={productsData.products}>
            <CartPage />
        </CartProvider>
    );
};

export default App;
