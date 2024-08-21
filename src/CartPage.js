// CartPage.js
import React, { useContext, useEffect, useState } from 'react';
import CartContext from './CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cart, dispatch } = useContext(CartContext);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        const amount = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
        setTotalQuantity(quantity);
        setTotalAmount(amount);
    }, [cart]);

    const increaseQuantity = (id) => {
        dispatch({ type: 'ADD_ITEM', payload: { id } });
    };

    const decreaseQuantity = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>{item.description}</p>
                            <div className="quantity-controls">
                                <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <p>Total Quantity: <strong>{totalQuantity}</strong></p>
                <p>Total Amount: <strong>${totalAmount.toFixed(2)}</strong></p>
            </div>
        </div>
    );
};

export default CartPage;
