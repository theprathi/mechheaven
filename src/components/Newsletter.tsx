import React, { useState } from 'react';
import { FiMail, FiCheck, FiGift } from 'react-icons/fi';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="newsletter section">
        <div className="container">
          <div className="newsletter-success">
            <div className="success-icon">
              <FiCheck />
            </div>
            <h2>Welcome to Miniature Magic! ✨</h2>
            <p>
              Thank you for joining our magical community! Check your email for your 10% discount code.
              You'll be the first to discover new enchanting treasures and exclusive magical offers.
            </p>
            <button 
              className="btn btn-outline"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <div className="newsletter-icon">
              <FiGift />
            </div>
            <h2 className="newsletter-title">
              Join Our Magical Community ✨
            </h2>
            <p className="newsletter-description">
              Subscribe to our enchanted newsletter and be the first to discover new miniature treasures, 
              magical deals, and crafting inspiration. Plus, get 10% off your first magical purchase!
            </p>
            <div className="newsletter-benefits">
              <div className="benefit">
                <FiCheck className="benefit-icon" />
                <span>Exclusive treasure releases</span>
              </div>
              <div className="benefit">
                <FiCheck className="benefit-icon" />
                <span>Magical crafting tips</span>
              </div>
              <div className="benefit">
                <FiCheck className="benefit-icon" />
                <span>Special collector pricing</span>
              </div>
            </div>
          </div>
          
          <div className="newsletter-form-container">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-container">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="subscribe-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="loading-spinner" />
                  ) : (
                    'Join the Magic ✨'
                  )}
                </button>
              </div>
              <p className="form-disclaimer">
                By subscribing, you agree to our Privacy Policy and Terms of Service. 
                Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;