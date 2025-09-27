import React from 'react';
import { FiMessageCircle, FiPercent, FiGift } from 'react-icons/fi';
import './WhatsAppOffer.css';

const WhatsAppOffer: React.FC = () => {
  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER || '9658379999';
  const message = "Hi! I'm interested in availing the 10% discount offer for MechHeaven products. Please provide me with more details.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="whatsapp-offer">
      <div className="container">
        <div className="offer-content">
          <div className="offer-header">
            <div className="offer-icon">
              <FiGift />
            </div>
            <h2>🎉 Special Offer Alert!</h2>
            <p>Get <span className="discount-highlight">10% OFF</span> on your first order</p>
          </div>

          <div className="offer-details">
            <div className="offer-step">
              <FiMessageCircle className="step-icon" />
              <span>Send us a message on WhatsApp</span>
            </div>
            <div className="offer-step">
              <FiPercent className="step-icon" />
              <span>Get your exclusive 10% discount code</span>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="whatsapp-btn"
          >
            <FiMessageCircle />
            <span>Message on WhatsApp</span>
          </button>

          <p className="offer-note">
            ✨ Limited time offer • Valid for new customers • Terms & conditions apply
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppOffer;