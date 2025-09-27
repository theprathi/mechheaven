import React, { useState } from 'react';
import { FiPhone, FiX, FiCheck } from 'react-icons/fi';
import { User } from 'firebase/auth';
import UserService from '../services/userService';
import './MobileNumberModal.css';

interface MobileNumberModalProps {
  user: User;
  isOpen: boolean;
  onComplete: () => void;
  onError?: (error: string) => void;
}

const MobileNumberModal: React.FC<MobileNumberModalProps> = ({
  user,
  isOpen,
  onComplete,
  onError
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate phone number
    const validation = UserService.validatePhoneNumber(phoneNumber);
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    try {
      setIsLoading(true);
      
      // Clean the phone number (remove spaces, special characters)
      const cleanedNumber = phoneNumber.replace(/\D/g, '');
      const formattedNumber = `+91${cleanedNumber}`;

      // Update user profile with phone number
      await UserService.updatePhoneNumber(user.uid, formattedNumber);
      
      console.log('Mobile number saved successfully');
      onComplete();
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to save mobile number';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Remove all non-digit characters
    value = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (value.length <= 10) {
      setPhoneNumber(value);
      setError(''); // Clear error when user starts typing
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="welcome-section">
            <img 
              src={user.photoURL || '/default-avatar.png'} 
              alt={user.displayName || 'User'} 
              className="user-avatar-large"
            />
            <h2>Welcome, {user.displayName?.split(' ')[0]}! ✨</h2>
            <p>Complete your profile to start exploring magical treasures</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mobile-form">
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              <FiPhone className="label-icon" />
              Mobile Number
            </label>
            <div className="phone-input-container">
              <span className="country-code">+91</span>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter 10-digit mobile number"
                className={`phone-input ${error ? 'error' : ''}`}
                maxLength={10}
                required
                disabled={isLoading}
              />
            </div>
            {error && <span className="error-message">{error}</span>}
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading || phoneNumber.length !== 10}
            >
              {isLoading ? (
                <div className="loading-spinner" />
              ) : (
                <>
                  <FiCheck className="btn-icon" />
                  Complete Profile
                </>
              )}
            </button>
          </div>

          <p className="privacy-note">
            🔒 Your mobile number is secure and will only be used for order updates and support.
          </p>
        </form>
      </div>
    </div>
  );
};

export default MobileNumberModal;