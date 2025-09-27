import React from 'react';
import { FiArrowRight, FiStar, FiHeart } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { isAuthenticated, signInWithGoogle } = useAuth();

  const handleExploreClick = async () => {
    if (isAuthenticated) {
      // If user is already logged in, we could scroll to products section
      // For now, we'll just trigger the Google login which will redirect to dashboard
      window.location.reload();
    } else {
      try {
        await signInWithGoogle();
        // User will be automatically redirected to dashboard after successful login
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };

  const handleViewTreasuresClick = async () => {
    if (isAuthenticated) {
      // If user is already logged in, reload to go to dashboard
      window.location.reload();
    } else {
      try {
        await signInWithGoogle();
        // User will be automatically redirected to dashboard after successful login
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FiStar className="badge-icon" />
              <span>Discover Miniature Magic</span>
            </div>
            <h1 className="hero-title">
              Enchanting 
              <span className="gradient-text"> Miniature Worlds</span>
            </h1>
            <p className="hero-description">
              Discover magical miniature worlds that bring tiny treasures to life.
            </p>
            <div className="hero-actions">
              <button onClick={handleExploreClick} className="btn btn-primary">
                Explore Magic
                <FiArrowRight className="btn-icon" />
              </button>
              <button onClick={handleViewTreasuresClick} className="btn btn-outline">
                View Treasure Chests
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <FiHeart className="stat-icon" />
                <span className="stat-number">500+</span>
                <span className="stat-label">Magical Creations</span>
              </div>
              <div className="stat">
                <FiStar className="stat-icon" />
                <span className="stat-number">100+</span>
                <span className="stat-label">Miniature Worlds</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="floating-card card-1">
                <div className="card-content">
                  <div className="product-icon">🏠</div>
                  <h3>Mini Houses</h3>
                  <p>Dollhouse dreams</p>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <div className="product-icon">🍰</div>
                  <h3>Tiny Kitchen</h3>
                  <p>Miniature cooking</p>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <div className="product-icon">🧸</div>
                  <h3>Cute Toys</h3>
                  <p>Magical companions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;