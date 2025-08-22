```jsx
import React, { useState } from "react";
import { useNavigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/+esm';
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetRequest = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Password reset link sent! (Simulated)");
    navigate("/check-email");
  };

  return (
    <div className="container bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto mt-10">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="Icon" className="icon w-6 bg-blue-100 rounded-full p-1 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h2>
      <p className="message text-gray-600 mb-6 text-center">No worries, we'll send you reset instructions.</p>
      <form onSubmit={handleResetRequest}>
        <div className="form-group mb-4">
          <label className="block text-gray-600 font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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