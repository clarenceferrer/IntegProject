import React, { useState } from "react";
import forgot from "../../assets/forgot.png"

export default function ForgotPassword({ isOpen, onClose, onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setEmail("");
    setIsSubmitted(false);
    onClose();
  };

  const handleBackToLogin = () => {
    setEmail("");
    setIsSubmitted(false);
    onBackToLogin();
  };

  const handleXButtonClick = () => {
    // Close the modal completely, don't go back to login
    onClose();
  };

  return (
    <>
      <style>
        {`
          .forgot-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
          }

          .forgot-modal {
            background: #fff;
            border-radius: 30px;
            height: 400px;
            width: 400px;
            padding: 40px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .forgot-modal h2 {
            margin: 0 0;
            color: #333;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
          }

          .forgot-modal p {
            font-size: 16px;
            color: #555;
            margin-bottom: 25px;
            line-height: 1.5;
            text-align: center;
          }

          .forgot-modal label {
            display: block;
            text-align: left;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 600;
            color: #333;
          }

          .forgot-modal input {
            width: 100%;
            padding: 15px 20px;
            margin-bottom: 20px;
            border: 2px solid #e1e5e9;
            border-radius: 25px;
            outline: none;
            font-size: 16px;
            box-sizing: border-box;
            transition: border-color 0.3s ease;
            background-color: #fafbfc;
            color: black;
          }

          .forgot-modal input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            background-color: #ffffff;
          }

          .forgot-modal button {
            width: 100%;
            background: #2563eb;
            color: white;
            padding: 15px 18px;
            border: none; 
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;;
            margin-top: 0;
          }

          .forgot-modal button:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          }

          .forgot-modal button:focus {
            outline: none;      
          }

          .forgot-modal button:active {
            transform: scale(0.98); 
            box-shadow: 0 2px 6px rgba(0,0,0,0.2) inset; 
          }

          .forgot-modal .back-link {
            width: 150px;
            display: block;
            margin: 20px auto 0;
            font-size: 16px;
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            cursor: pointer;
            text-align: center;
          }

          .forgot-modal .back-link:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }

          .forgot-close-btn {
            position: absolute;
            top: 25px;
            right: 25px;
            font-size: 28px;
            cursor: pointer;
            color: #666;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
            background: #f8f9fa;
          }

          .forgot-close-btn:hover {
            background: #e9ecef;
            color: #333;
            transform: scale(1.1);
          }

          .success-message {
            color: #333;
            font-size: 18px;
            font-weight: 500;
            text-align: center;
            margin: 30px auto;
            max-width: 350px;
          }

          .forgot-modal .email-button {
            width: 100%;
            background: #2563eb;
            color: white;
            padding: 15px 18px;
            border: none; 
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            margin-bottom: 20px;
          }

          .forgot-modal .email-button:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          }

          .forgot-modal .email-button:focus {
            outline: none;      
          }

          .forgot-modal .email-button:active {
            transform: scale(0.98); 
            box-shadow: 0 2px 6px rgba(0,0,0,0.2) inset; 
          }

          .forgot-modal .resend-text {
            font-size: 16x;
            color: #666;
            text-align: center;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .forgot-modal .resend-text .highlight {
            color: #2563eb;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .forgot-modal .resend-text:hover .highlight {
            color: #1d4ed8;
          }

          .forgot-image {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            display: block;
          }
        `}
      </style>
      
      <div className="forgot-overlay" onClick={handleClose}>
        <div className="forgot-modal" onClick={(e) => e.stopPropagation()}>
          <span className="forgot-close-btn" onClick={handleXButtonClick}>&times;</span>
          
          <img src={forgot} alt="Forgot Password" className="forgot-image" />
          
          {!isSubmitted ? (
            <>
              <h2>Forgot Password</h2>
              <p>No worries, we'll send you reset instructions.</p>
              
              <form onSubmit={handleSubmit}>
                <label htmlFor="resetEmail">Email Address</label>
                <input
                  type="email"
                  id="resetEmail"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Reset Password</button>
              </form>
            </>
          ) : (
            <>
              <h2>Check Your Email</h2>
              <div className="success-message">
                We sent a password reset link to {email}
              </div>
              <button className="email-button" onClick={() => window.open('mailto:', '_blank')}>
                Open Email App
              </button>
              <div className="resend-text" onClick={() => handleSubmit({ preventDefault: () => {} })}>
                Didn't receive the email? <span className="highlight">Click to resend</span>
              </div>
            </>
          )}
          
          <a className="back-link" onClick={handleBackToLogin}>
            &lt; Back to Login
          </a>
        </div>
      </div>
    </>
  );
}
