import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './GoogleLogin.css';

interface GoogleLoginProps {
  onLoginSuccess?: () => void;
  onLoginError?: (error: string) => void;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({ onLoginSuccess, onLoginError }) => {
  const { currentUser, signInWithGoogle, signOut, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      onLoginSuccess?.();
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to sign in with Google';
      onLoginError?.(errorMessage);
      console.error('Login error:', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error: any) {
      console.error('Logout error:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated && currentUser) {
    return (
      <div className="user-profile">
        <div className="user-info">
          <img 
            src={currentUser.photoURL || '/default-avatar.png'} 
            alt={currentUser.displayName || 'User'} 
            className="user-avatar"
          />
          <span className="user-name">{currentUser.displayName}</span>
        </div>
        <button 
          onClick={handleSignOut} 
          className="logout-btn"
          disabled={isLoading}
          aria-label="Sign Out"
        >
          <FiLogOut />
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={handleGoogleSignIn} 
      disabled={isLoading}
      className="google-login-btn"
      aria-label="Sign in with Google"
    >
      {isLoading ? (
        <div className="loading-spinner" />
      ) : (
        <>
          <FaGoogle className="google-icon" />
          <span>Get Started</span>
        </>
      )}
    </button>
  );
};

export default GoogleLogin;