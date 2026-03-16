import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link to="/" className="luxury-logo">
          GLAM<span>STORE</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">Collections</Link>
          <Link to="/cart" className="nav-item luxury-cart">
            Bag
            {cartCount > 0 && <span className="luxury-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
