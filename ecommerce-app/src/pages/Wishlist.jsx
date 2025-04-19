import React, { useState } from 'react';
import '../styles/Wishlist.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, title: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;