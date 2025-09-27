import React from 'react';
import { FiShoppingCart, FiSearch, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import Dashboard from './Dashboard';
import './DashboardLayout.css';

const DashboardLayout: React.FC = () => {
  const { currentUser, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>MechHeaven</h1>
            </div>

            <div className="header-search">
              <div className="search-container">
                <FiSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search magical treasures..." 
                  className="search-input"
                />
              </div>
            </div>

            <div className="header-actions">
              <button className="cart-btn" aria-label="Shopping Cart">
                <FiShoppingCart />
                <span className="cart-count">0</span>
              </button>
              
              <div className="user-profile">
                <span className="user-name">
                  {currentUser?.displayName?.split(' ')[0]}
                </span>
                <button 
                  onClick={handleLogout} 
                  className="logout-btn"
                  aria-label="Logout"
                >
                  <FiLogOut className="logout-icon" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Dashboard />
    </div>
  );
};

export default DashboardLayout;