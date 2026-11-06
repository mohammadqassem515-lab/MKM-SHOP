import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const savedCart = JSON.parse(localStorage.getItem("mkm_cart")) || [];
      const totalItems = savedCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCount();
    const interval = setInterval(updateCount, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="mkm-navbar">
      <Link to="/" className="mkm-logo">
        MKM-SHOP
      </Link>

      <div className="mkm-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
        <Link to="/cart" className="cartNavLink">
          🛒 Cart
          {cartCount > 0 && <span className="navCartBadge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;