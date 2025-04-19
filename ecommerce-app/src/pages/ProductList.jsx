import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ProductList.css';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch all products
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      // Duplicate products to simulate more items for scrolling
      const extendedProducts = [...data, ...data, ...data];
      setProducts(extendedProducts);
    };

    // Fetch all categories
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // Filter products by category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-list-container">
      {/* Search Bar */}
      <div className="filters">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Category Buttons */}
        <button onClick={() => setSelectedCategory('')}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <p>
                ⭐ {product.rating?.rate || 0} ({product.rating?.count || 0})
              </p>
            </Link>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
              style={{ marginTop: '10px', alignSelf: 'flex-end' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 E-SHOPPER. All rights reserved.</p>
        <p>Contact us: support@eshopper.com | +1 (123) 456-7890</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
        <p>Privacy Policy | Terms of Service</p>
        
      </div>
      <div style={{ height: '50px' }}></div> {/* Empty space to show all content */}
    </footer>
  );
};

export default ProductList;