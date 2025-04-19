import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-message">
        Product not found
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-button">
        ← Back to Products
      </Link>
      <div className="product-detail">
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-rating">
            <span className="rating-stars">
              {'★'.repeat(Math.floor(product.rating?.rate || 0))}
              {'☆'.repeat(5 - Math.floor(product.rating?.rate || 0))}
            </span>
            <span className="rating-count">
              ({product.rating?.count || 0} ratings)
            </span>
          </div>
          <div className="product-price-container">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <span className="product-category">{product.category}</span>
          </div>
          <div className="product-description">
            <h3>About this item</h3>
            <p>{product.description}</p>
          </div>
          <button onClick={handleAddToCart} className="add-to-cart-button" style={{ float: 'right' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;