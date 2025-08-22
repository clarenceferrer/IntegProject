```jsx
import React from "react";
import { useNavigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/+esm';
import "./CheckEmail.css";

export default function CheckEmail() {
  const navigate = useNavigate();

  const openEmailApp = (e) => {
    e.preventDefault();
    alert("Opening email app... (Simulated)");
    navigate("/set-new-password");
  };

  const resendEmail = (e) => {
    e.preventDefault();
    alert("Resending email... (Simulated)");
  };

  return (
    <div className="container bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto mt-10">
      <div className="icon-wrapper w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <i className="fa-regular fa-envelope text-blue-600 text-2xl"></i>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">Check Your Email</h2>
      <p className="message text-gray-600 mb-6 text-center">We sent a password reset link to <br /> loremipsum@gmail.com</p>
      <button className="btn w-full p-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 font-semibold" onClick={openEmailApp}>Open Email App</button>
      <p className="extra-links text-sm text-gray-500 mt-4">Didn't receive the email? <a href="#" onClick={resendEmail} className="text-blue-600 hover:underline font-medium">Click to resend</a></p>
      <p className="back text-sm text-gray-400 mt-4"><a href="/" className="text-gray-400 hover:underline">← Back to Login</a></p>
    </div>
  );
}
```