import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiSearch } from 'react-icons/fi';
import GoogleLogin from './GoogleLogin';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>MechHeaven</h1>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Treasures</a></li>
              <li><a href="#dollhouses">Dollhouses</a></li>
              <li><a href="#kitchen">Kitchen Toys</a></li>
              <li><a href="#plush">Plush Friends</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="search-btn" aria-label="Search">
              <FiSearch />
            </button>
            <button className="cart-btn" aria-label="Shopping Cart">
              <FiShoppingCart />
              <span className="cart-count">0</span>
            </button>
            <GoogleLogin 
              onLoginSuccess={() => console.log('Login successful!')}
              onLoginError={(error) => console.error('Login failed:', error)}
            />
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;