import React from "react";
import "./Navbar.css";
import nulogo from "../../assets/nulogo.png";
import LoginModal from "../ui/LoginModal";

export default function Navbar({ openLoginModal }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={nulogo} alt="NU Logo" className="logo" />
          <h1 className="title">
            NU Dasmarinas <br /> ITSO ID Tracker
          </h1>
        </div>

        <div className="navbar-links">
          <a href="#" className="active">Home</a>
          <a href="#">Calendar</a>
          <a href="#">About us</a>
          <button className="login-btn" onClick={openLoginModal}>Log In</button>
          <div className="profile-icon">👤</div>
        </div>
      </nav>
    </>
  );
}
