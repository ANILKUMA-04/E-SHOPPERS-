import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Category</h3>
      <ul>
        <li>Sportswear</li>
        <li>Mens</li>
        <li>Womens</li>
        <li>Kids</li>
        <li>Fashion</li>
        <li>Households</li>
      </ul>
      <h3>Brands</h3>
      <ul>
        <li>Acne</li>
        <li>Grüne Erde</li>
        <li>Albiro</li>
        <li>Ronhill</li>
      </ul>
    </div>
  );
};

export default Sidebar;