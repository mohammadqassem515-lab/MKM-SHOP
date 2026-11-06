import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('mkm_cart')) || [];
    
    const itemIndex = existingCart.findIndex((item) => item.id === product.id);
    
    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('mkm_cart', JSON.stringify(existingCart));
    alert(`${product.title} added to cart successfully!`);
  };

  return (
    <div className="productCard">
      <div className="productImageWrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="productDetails">
        <h3>{product.title}</h3>
        <div className="productPrices">
          <span className="currentPrice">${product.price}</span>
        </div>
        <button className="addToCartBtn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;