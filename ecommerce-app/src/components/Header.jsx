import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isLoginPage = location.pathname === '/login';

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      alert('Please log in to access this page.');
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">E-SHOPPER</Link>
        </div>
        <nav className="nav-links">
          <button onClick={() => handleNavigation('/')}>Home</button>
          <button onClick={() => handleNavigation('/shop')}>Shop</button>
          <button onClick={() => handleNavigation('/account')}>Account</button>
          <button onClick={() => handleNavigation('/contact')}>Contact</button>
        </nav>
        <div className="account-links">
          {isAuthenticated ? (
            <>
              <button onClick={() => navigate('/cart')} className="cart-button">Cart</button>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </>
          ) : (
            !isLoginPage && <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      {!isLoginPage && (
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      )}
    </header>
  );
};

export default Header;