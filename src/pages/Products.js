import React, { useState } from 'react';
import products from '../data/products'; 
import ProductCard from '../Components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((item) => item.category))];

  const filteredProducts = products.filter((product) => {
    const cleanTitle = product.title ? product.title.toLowerCase().trim() : '';
    const cleanSearch = searchTerm.toLowerCase().trim();

    const matchesSearch = cleanTitle.includes(cleanSearch);
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="productsPage">
      <div className="productsHeader">
        <h1>Our Collection</h1>
        <p>Find your style with our latest collection</p>
      </div>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
        />
      </div>

      <div className="categoriesContainer">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`categoryBtn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="productsGridContainer">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="noProductsMsg">No products found matching "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default Products;