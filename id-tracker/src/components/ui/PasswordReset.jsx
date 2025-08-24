import React, { useEffect } from "react";

export default function PasswordReset({ isOpen, onClose, onBackToLogin }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          .password-reset-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1002;
          }

          .password-reset-modal {
            background: #fff;
            border-radius: 30px;
            height: 350px;
            width: 400px;
            padding: 40px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .password-reset-close-btn {
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
            border: none;
          }

          .password-reset-close-btn:hover {
            background: #e9ecef;
            color: #333;
            transform: scale(1.1);
          }

          .password-reset-modal .icon {
            background: #e9f0ff;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 20px auto;
          }

          .icon::before {
            content: "✓";
            font-size: 28px;
            color: #3c5ed8;
            font-weight: bold;
          }

          .password-reset-modal h2 {
            margin: 0 0 15px;
            color: #333;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
          }

          .password-reset-modal p {
            font-size: 16px;
            color: #555;
            margin: 0 auto 30px;
            line-height: 1.5;
            text-align: center;
            max-width: 350px;
          }

          .password-reset-modal .btn {
            width: 100%;
            background: #2563eb;
            color: white;
            padding: 15px 18px;
            border: none;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 20px;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .password-reset-modal .btn:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          }

          .password-reset-modal .btn:focus {
            outline: none;
          }

          .password-reset-modal .btn:active {
            transform: scale(0.98);
            box-shadow: 0 2px 6px rgba(0,0,0,0.2) inset;
          }

          .password-reset-modal .back {
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

          .password-reset-modal .back:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }
        `}
      </style>
      
      <div className="password-reset-overlay" onClick={onClose}>
        <div className="password-reset-modal" onClick={(e) => e.stopPropagation()}>
          <span className="password-reset-close-btn" onClick={onClose}>&times;</span>
          
          <div className="icon"></div>
          <h2>Password Reset</h2>
          <p>Your password has been successfully reset.<br/>
             Click below to login magically.</p>
          <button className="btn" onClick={onClose}>Continue</button>
          <span className="back" onClick={onBackToLogin}>&lt; Back to Login</span>
        </div>
      </div>
    </>
  );
}
