```jsx
import React from "react";
import { useNavigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/+esm';
import "./PasswordReset.css";

export default function PasswordReset() {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    alert("Logging in... (Simulated)");
    navigate("/");
  };

  return (
    <div className="container bg-white bg-opacity-90 rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto mt-10">
      <div className="checkmark bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 text-blue-600 text-xl font-bold">✓</div>
      <h1 className="text-xl font-bold text-gray-800 mb-3 text-center">Password Reset</h1>
      <p className="text-gray-600 mb-3 text-center">Your password has been successfully reset.</p>
      <p className="text-gray-600 mb-4 text-center">Click below to login magically.</p>
      <button onClick={handleContinue} className="w-full p-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 font-semibold">Continue</button>
      <a href="/" className="text-gray-600 text-sm mt-3 block text-center hover:underline">← Back to Login</a>
    </div>
  );
}
```