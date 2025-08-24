import React from "react";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../components/layout/HeroSection";
import Synch from "../../components/layout/Synch";
import HowItWorks from "../../components/layout/HowItWorks";
import Announcements from "../../components/layout/Announcements"; // ✅
import Footer from "../../components/layout/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Synch />
      <HowItWorks />
      <Announcements />
      <Footer />
    </>
  );
}

export default LandingPage;

