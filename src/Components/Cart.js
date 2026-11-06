

import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('mkm_cart')) || [];
    setCartItems(savedCart);
  }, []);

  const updateCartStorage = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('mkm_cart', JSON.stringify(updatedItems));
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartStorage(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCartStorage(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    updateCartStorage(updated);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 10 : 0;
  const total = subtotal + (subtotal > 0 ? shipping : 0);

  return (
    <div className="cartPage">
      <div className="cartHero">
        <h1>Shopping Cart</h1>
        <p>Review your selected items before proceeding to checkout</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <a href="/products" className="shopNowBtn">Start Shopping</a>
        </div>
      ) : (
        <div className="cartContainer">
          <div className="cartItemsList">
            {cartItems.map(item => (
              <div className="cartItemCard" key={item.id}>
                <div className="cartItemImage">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cartItemDetails">
                  <h3>{item.title}</h3>
                  <span className="cartItemPrice">${item.price}</span>
                </div>
                <div className="cartItemActions">
                  <div className="quantitySelector">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <span className="itemTotalCost">${item.price * item.quantity}</span>
                  <button className="removeBtn" onClick={() => removeItem(item.id)}>
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cartSummaryCard">
            <h2>Order Summary</h2>
            <div className="summaryRow">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="summaryRow">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="summaryDivider"></div>
            <div className="summaryRow totalRow">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button className="checkoutBtn" onClick={() => alert('Proceeding to checkout...')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;