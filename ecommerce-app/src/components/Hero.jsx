import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>E-SHOPPER</h1>
        <p>100% Responsive Design</p>
        <button>Get it now</button>
      </div>
      <img src="/path-to-banner-image.jpg" alt="Shopping Banner" />
    </div>
  );
};

export default Hero;