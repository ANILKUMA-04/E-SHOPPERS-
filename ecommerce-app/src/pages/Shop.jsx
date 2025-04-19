import React from 'react';
import '../styles/ProductList.css';

const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Welcome to the Shop</h1>
      <p>Explore our wide range of products and find the best deals just for you!</p>
      <div className="shop-content">
        <h2>Featured Categories</h2>
        <ul className="category-list" style={{ listStyleType: 'none', padding: 0 }}>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home Appliances</li>
          <li>Books</li>
          <li>Sports Equipment</li>
        </ul>
        <h2>Why Shop With Us?</h2>
        <p>We offer the best prices, high-quality products, and excellent customer service. Shop now and experience the difference!</p>
      </div>
    </div>
  );
};

export default Shop;