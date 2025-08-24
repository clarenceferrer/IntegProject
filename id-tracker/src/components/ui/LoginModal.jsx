import React from "react";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal {
            background: #fff;
            height: 600px;
            width: 400px;
            border-radius: 30px;
            padding: 40px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .modal h2 {
            margin: 0 0 25px;
            color: #333;
            font-size: 32px;
            text-align: left;
            font-weight: 600;
          }

          .modal .input-group {
            margin-bottom: 18px;
          }

          .modal .input-group label {
            display: block;
            margin-bottom: 6px;
            color: #333;
            font-size: 16px;
            font-weight: 600;
            text-align: left;
          }

          .modal input {
            color: black;
            width: 100%;
            padding: 15px 20px;
            margin: 0;
            border: 2px solid #e1e5e9;
            border-radius: 25px;
            outline: none;
            box-sizing: border-box;
            font-size: 16px;
            transition: border-color 0.3s ease;
            background-color: #fafbfc;
          }

          .modal input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            background-color: #ffffff;
          }

          .modal .password-wrapper {
            position: relative;
          }

          .modal .password-wrapper input {
            padding-right: 35px;
          }

          .modal .forgot-password {
            text-align: right;
            margin: 8px 0 20px;
          }

          .modal .forgot-password a {
            font-size: 15px;
            color: #2563eb;
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: 500;
          }

          .modal .forgot-password a:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }

          .modal button {
            width: 100%;
            background: #2563eb;
            border: none;
            padding: 18px;
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 0;
            transition: background-color 0.3s ease;
          }

          .modal button:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          }

          .modal .google-btn {;
            background: #fff;
            border: 2px solid #e1e5e9;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .modal .google-btn:hover {
            background: #f8f9fa;
            border-color: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .modal .google-btn img {
            width: 24px;
            margin-right: 12px;
          }

          .modal .close-btn {
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

          .modal .close-btn:hover {
            background: #e9ecef;
            color: #333;
            transform: scale(1.1);
          }

          .modal .divider {
            text-align: center;
            margin: 20px 0;
            color: #6c757d;
            font-size: 16px;
            position: relative;
          }

          .modal .divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: #e1e5e9;
            z-index: 1;
          }

          .modal .divider span {
            background: #fff;
            padding: 0 20px;
            position: relative;
            z-index: 2;
          }
        `}
      </style>
      
      <div className="overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={onClose}>&times;</span>
          <h2>Login</h2>
          
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address" />
          </div>
          
          <div className="input-group">
            <label htmlFor="studentNumber">Student Number</label>
            <input type="text" id="studentNumber" placeholder="Enter your student number" />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
          </div>
          
          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>
          
          <button>Log In</button>
          <div className="divider">
            <span>or</span>
          </div>
          <button className="google-btn">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
            Sign In with Google
          </button>
        </div>
      </div>
    </>
  );
}
