```jsx
import React, { useState } from "react";
import { useNavigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/+esm';
import "./SetNewPassword.css";

export default function SetNewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSetNewPassword = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Password reset successfully! (Simulated)");
    navigate("/password-reset");
  };

  return (
    <div className="container bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto mt-10">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="Icon" className="icon w-6 bg-blue-100 rounded-full p-1 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Set New Password</h2>
      <p className="message text-gray-600 mb-6 text-center">Your new password must be different from previously used passwords.</p>
      <form onSubmit={handleSetNewPassword}>
        <div className="form-group mb-4">
          <label className="block text-gray-600 font-medium mb-2">New Password</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter your password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-600 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
          />
        </div>
        <button className="btn w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold" type="submit">Reset Password</button>
        <p className="back-link text-sm text-left mt-4"><a href="/" className="link text-blue-600 hover:underline">← Back to Login</a></p>
      </form>
    </div>
  );
}
```