import React from "react";
import "./Footer.css";
import nulogo from "../../assets/nulogo.png"; // replace with your actual path

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="mailto:itso@nu-dasma.edu.ph">itso@nu-dasma.edu.ph</a>
          </div>
          <div className="footer-section">
            <h4>Careers</h4>
            <a href="mailto:itso@nu-dasma.edu.ph">itso@nu-dasma.edu.ph</a>
          </div>
          <p className="footer-copy">
            © 2025. Group 2. All Rights Reserved.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4>Address</h4>
          <p>
            Sampaloc 1 Bridge, SM<br />
            Dasmariñas, Governor's <br />
            Dr, Dasmariñas,<br />
            Philippines
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
        <div className="footer-brand">
            <img src={nulogo} alt="NU Logo" className="footer-logo" />
            <h3>
              NU Dasmarinas <br /> ITSO ID Tracker
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
