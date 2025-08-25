import React from "react";
import "./Navbar.css";
import nulogo from "../../assets/nulogo.png";
import LoginModal from "../ui/LoginModal";
import { Link } from "react-router-dom";

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
          <Link to="/" className="active">Home</Link>
          <Link to="/appointment">Appointment</Link>
          <a href="#">About us</a>
          <button className="login-btn" onClick={openLoginModal}>Log In</button>
          <div className="profile-icon">👤</div>
        </div>
      </nav>
    </>
  );
}
