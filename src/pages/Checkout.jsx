import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isFinalized, setIsFinalized] = useState(false);

  const processOrder = (e) => {
    e.preventDefault();
    setIsFinalized(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 4000);
  };

  if (isFinalized) {
    return (
      <div className="container py-8 text-center">
        <div className="luxury-confirm fade-in">
          <h1>Transaction Secured</h1>
          <p>Your order is being prepared for shipment.</p>
          <div className="l-timer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="boutique-title">Finalize Order</h1>
      <div className="checkout-view">
        <form className="luxury-form" onSubmit={processOrder}>
          <h3>Delivery Particulars</h3>
          <div className="f-field">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="f-field">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="f-field">
            <label>Residence</label>
            <input type="text" required />
          </div>
          <div className="f-row">
            <div className="f-field">
              <label>City</label>
              <input type="text" required />
            </div>
            <div className="f-field">
              <label>Postal</label>
              <input type="text" required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Complete Secure Purchase
          </button>
        </form>
        <div className="luxury-order-mini">
          <h3>Your Selection</h3>
          <div className="mini-list">
            {cartItems.map(item => (
              <div key={item.id} className="mini-item">
                <span>{item.title}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mini-total">
            <span>Estate Total</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
