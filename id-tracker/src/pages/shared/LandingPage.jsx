import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../components/layout/HeroSection";
import Synch from "../../components/layout/Synch";
import HowItWorks from "../../components/layout/HowItWorks";
import Announcements from "../../components/layout/Announcements"; // ✅
import Footer from "../../components/layout/Footer";
import LoginModal from "../../components/ui/LoginModal";
import SetNewPassword from "../../components/ui/SetNewPassword";
import PasswordReset from "../../components/ui/PasswordReset";

function LandingPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSetNewPasswordOpen, setIsSetNewPasswordOpen] = useState(false);
  const [isPasswordResetOpen, setIsPasswordResetOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  
  const openSetNewPassword = () => setIsSetNewPasswordOpen(true);
  const closeSetNewPassword = () => setIsSetNewPasswordOpen(false);
  
  const openPasswordReset = () => setIsPasswordResetOpen(true);
  const closePasswordReset = () => setIsPasswordResetOpen(false);
  
  const handleBackToLogin = () => {
    setIsSetNewPasswordOpen(false);
    setIsLoginModalOpen(true);
  };

  const handlePasswordResetSuccess = () => {
    setIsSetNewPasswordOpen(false);
    setIsPasswordResetOpen(true);
  };

  const handleBackToLoginFromReset = () => {
    setIsPasswordResetOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <Navbar 
        openLoginModal={openLoginModal} 
      />
      <HeroSection openLoginModal={openLoginModal} />
      <Synch />
      <HowItWorks />
      <Announcements />
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <SetNewPassword 
        isOpen={isSetNewPasswordOpen} 
        onClose={closeSetNewPassword}
        onBackToLogin={handleBackToLogin}
        onPasswordResetSuccess={handlePasswordResetSuccess}
      />
      <PasswordReset
        isOpen={isPasswordResetOpen}
        onClose={closePasswordReset}
        onBackToLogin={handleBackToLoginFromReset}
      />
    </>
  );
}

export default LandingPage;

