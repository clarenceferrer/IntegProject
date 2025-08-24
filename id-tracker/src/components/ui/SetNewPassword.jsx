import React, { useState, useEffect } from "react";
import forgot from "../../assets/forgot.png";

export default function SetNewPassword({ isOpen, onClose, onBackToLogin, onPasswordResetSuccess }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Clear inputs when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setNewPassword("");
      setConfirmPassword("");
      setPasswordsMatch(true);
    }
  }, [isOpen]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    // Here you would typically send the new password to your backend
    console.log("Password reset with:", newPassword);
    
    // Clear inputs before closing
    setNewPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
    
    // Call the success callback to show PasswordReset modal
    if (onPasswordResetSuccess) {
      onPasswordResetSuccess();
    } else {
      onClose();
    }
  };

  const handleClose = () => {
    setNewPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
    onClose();
  };

  const handleBackToLogin = () => {
    setNewPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
    onBackToLogin();
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (newPassword && e.target.value !== newPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <>
      <style>
        {`
          .set-password-overlay {
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

          .set-password-modal {
            background: #fff;
            border-radius: 30px;
            height: 550px;
            width: 400px;
            padding: 40px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .set-password-modal h2 {
            margin: 0 0 15px;
            color: #333;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
          }

          .set-password-modal p {
            font-size: 16px;
            color: #555;
            margin: 0 auto 30px;
            line-height: 1.5;
            text-align: center;
            max-width: 350px;
          }

          .set-password-modal .input-group {
            margin-bottom: 20px;
            text-align: left;
          }

          .set-password-modal label {
            display: block;
            text-align: left;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 600;
            color: #333;
          }

          .set-password-modal input {
            width: 100%;
            padding: 15px 20px;
            border: 2px solid #e1e5e9;
            border-radius: 25px;
            outline: none;
            font-size: 16px;
            box-sizing: border-box;
            transition: border-color 0.3s ease;
            background-color: #fafbfc;
            color: black;
          }

          .set-password-modal input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            background-color: #ffffff;
          }

          .set-password-modal input.error {
            border-color: #dc3545;
          }

          .set-password-modal .error-message {
            color: #dc3545;
            font-size: 14px;
            margin-top: 5px;
            text-align: left;
            display: ${passwordsMatch ? 'none' : 'block'};
          }

          .set-password-modal button {
            width: 100%;
            background: #2563eb;
            color: white;
            padding: 15px 18px;
            border: none; 
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            margin-top: 10px;
          }

          .set-password-modal button:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          }

          .set-password-modal button:focus {
            outline: none;      
          }

          .set-password-modal button:active {
            transform: scale(0.98); 
            box-shadow: 0 2px 6px rgba(0,0,0,0.2) inset; 
          }

          .set-password-modal .back-link {
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

          .set-password-modal .back-link:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }

          .set-password-close-btn {
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

          .set-password-close-btn:hover {
            background: #e9ecef;
            color: #333;
            transform: scale(1.1);
          }

          .set-password-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            display: block;
          }
        `}
      </style>
      
      <div className="set-password-overlay" onClick={handleClose}>
        <div className="set-password-modal" onClick={(e) => e.stopPropagation()}>
          <span className="set-password-close-btn" onClick={handleClose}>&times;</span>
          
            <img src={forgot} alt="Set New Password" className="set-password-icon"/>
          
          <h2>Set New Password</h2>
          <p>Your new password must be different from previously used passwords.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="new-password">New Password</label>
              <input
                type="password"
                id="new-password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={!passwordsMatch ? 'error' : ''}
                required
              />
              <div className="error-message">
                Passwords do not match
              </div>
            </div>
            
            <button type="submit">Reset Password</button>
          </form>
          
          <a className="back-link" onClick={handleBackToLogin}>
            &lt; Back to Login
          </a>
        </div>
      </div>
    </>
  );
}
