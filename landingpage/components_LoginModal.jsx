```jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/+esm';
import "./LoginModal.css";

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !studentNumber || !password) {
      alert("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (studentNumber.length < 6) {
      alert("Student number must be at least 6 characters long.");
      return;
    }
    onClose();
    navigate("/");
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    alert("Google Sign-In initiated! (Simulated)");
    onClose();
  };

  const onOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) onClose();
  };

  return (
    <div className="modal-overlay" onMouseDown={onOverlayClick}>
      <div className="container bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md" role="dialog" aria-modal="true">
        <button className="close absolute top-4 right-6 text-2xl text-gray-500 hover:text-blue-600" onClick={onClose} aria-label="Close">&times;</button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              className="w-full p-3 border border-gray-300 rounded-full focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="form-group mb-4">
            <label className="block text-gray-700 font-medium mb-2">Student Number</label>
            <input
              type="text"
              id="studentNumber"
              placeholder="Enter your student number"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              autoComplete="off"
              className="w-full p-3 border border-gray-300 rounded-full focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="form-group mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="password-row flex justify-between">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full p-3 border border-gray-300 rounded-full focus:border-blue-600 focus:outline-none"
              />
            </div>
            <a href="/forgot-password" className="forgot-link text-sm text-gray-600 hover:text-blue-600 float-right mt-2">Forgot your password?</a>
          </div>
          <button className="btn w-full p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-bold" type="submit">Log In</button>
          <div className="or-divider text-center text-gray-500 my-3">or</div>
          <button
            className="google-btn w-full p-3 bg-white border border-gray-300 rounded-full flex items-center justify-center gap-2 text-gray-600 hover:border-blue-600 hover:text-blue-600 font-semibold"
            onClick={handleGoogleLogin}
            type="button"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Sign In with Google
          </button>
          <div className="signup-row text-center text-sm text-gray-700 mt-3">
            Don’t have an account ? <a href="/create-account" className="link text-blue-600 hover:underline font-medium">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
```