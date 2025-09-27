import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">MechHeaven</h3>
            <p className="footer-description">
              Discover enchanting miniature worlds filled with whimsical toys and charming 
              kitchen treasures. Creating magical moments one tiny treasure at a time.
            </p>
            <div className="social-links">
              <a href="https://instagram.com/mechheaven" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
              <a href="https://twitter.com/mechheaven" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
              <a href="https://facebook.com/mechheaven" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
              <a href="https://linkedin.com/company/mechheaven" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Magical Realms</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Treasures</a></li>
              <li><a href="#dollhouses">Dollhouses</a></li>
              <li><a href="#kitchen">Kitchen Toys</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Treasure Categories</h4>
            <ul className="footer-links">
              <li><a href="#miniature-houses">Miniature Houses</a></li>
              <li><a href="#kitchen-toys">Kitchen Toys</a></li>
              <li><a href="#plush-toys">Plush Friends</a></li>
              <li><a href="#garden-miniatures">Fairy Gardens</a></li>
              <li><a href="#play-food">Play Food Sets</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <a href="mailto:info@mechheaven.com">info@mechheaven.com</a>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <a href="https://wa.me/1234567890">WhatsApp Support</a>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <a href="tel:+911234567890">+91 123 456 7890</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Mech Heaven. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <button 
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;