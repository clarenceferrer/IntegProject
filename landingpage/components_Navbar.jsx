```jsx
import React, { useState } from "react";
import "./Navbar.css";
import Login from "./LoginModal";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="navbar-left flex items-center">
          <img src="/nulogo.png" alt="NU Logo" className="logo w-10 h-10 mr-2" />
          <span className="title text-xl font-bold text-gray-800">NU Dasmarinas ITSO ID Tracker</span>
        </div>
        <div className="navbar-center flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Calendar</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About us</a>
        </div>
        <div className="navbar-right flex items-center space-x-4">
          <button className="login-btn bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700" onClick={() => setShowLogin(true)}>Log In</button>
          <a href="/create-account" className="signup-btn border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50">Sign Up</a>
          <div className="profile-icon text-2xl">👤</div>
        </div>
      </nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}
```