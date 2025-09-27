import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/DashboardLayout';
// import MobileNumberModal from './components/MobileNumberModal'; // Mobile number now optional
import './styles/global.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner-large"></div>
        <h2>Loading MechHeaven...</h2>
        <p>Please wait while we prepare your magical experience</p>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { currentUser, isAuthenticated, hasCompletedProfile, loading } = useAuth();
  // const [showMobileModal, setShowMobileModal] = useState(false); // Mobile number now optional
  const [postLoginLoading, setPostLoginLoading] = useState(false);

  React.useEffect(() => {
    // Mobile number collection is now optional - users can skip it
    // if (isAuthenticated && currentUser && !hasCompletedProfile && !loading) {
    //   setPostLoginLoading(true);
    //   // Give a brief moment to determine profile status
    //   setTimeout(() => {
    //     setPostLoginLoading(false);
    //     setShowMobileModal(true);
    //   }, 1500); // 1.5 second loading after login
    // } else 
    if (isAuthenticated && currentUser) {
      setPostLoginLoading(false);
      // setShowMobileModal(false); // Mobile number now optional
    } else if (!isAuthenticated) {
      setPostLoginLoading(false);
      // setShowMobileModal(false); // Mobile number now optional
    }
  }, [isAuthenticated, hasCompletedProfile, currentUser, loading]);

  // Mobile number collection handlers - now optional
  // const handleMobileComplete = async () => {
  //   await refreshUserProfile();
  //   setShowMobileModal(false);
  // };

  // const handleMobileError = (error: string) => {
  //   console.error('Mobile number collection error:', error);
  //   // Keep modal open on error
  // };

  // Show loading screen only during initial app load
  if (loading && !currentUser) {
    return <LoadingScreen />;
  }

  // Show loading screen after user logs in while determining profile status
  if (postLoginLoading) {
    return <LoadingScreen />;
  }

  // Show dashboard if user is authenticated (mobile number no longer required)
  if (isAuthenticated && currentUser) {
    return <DashboardLayout />;
  }

  // Show landing page for non-authenticated users
  return (
    <div className="App">
      <LandingPage />
      
      {/* Mobile Number Collection Modal - Now optional, commented out */}
      {/* {currentUser && showMobileModal && (
        <MobileNumberModal
          user={currentUser}
          isOpen={showMobileModal}
          onComplete={handleMobileComplete}
          onError={handleMobileError}
        />
      )} */}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;