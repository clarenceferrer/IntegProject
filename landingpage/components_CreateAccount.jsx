```jsx
import React, { useState } from "react";
import { useNavigate } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/+esm';
import "./CreateAccount.css";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !studentNumber || !password) {
      alert("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (!terms) {
      alert("You must agree to the Terms and Privacy.");
      return;
    }
    alert("Account created successfully! (Simulated)");
    navigate("/");
  };

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    alert("Google Sign-Up initiated! (Simulated)");
  };

  return (
    <div className="container bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group mb-4">
          <label className="block text-gray-600 font-medium mb-2">Name and Surname</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name and surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
          />
        </div>
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
        <div className="form-group mb-4">
          <label className="block text-gray-600 font-medium mb-2">Student Number</label>
          <input
            type="text"
            id="studentNumber"
            placeholder="Enter your student number"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-600 font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="form-group terms flex items-center text-sm text-gray-600 mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className="mr-2"
          />
          I agree with Terms and Privacy
        </div>
        <button className="btn w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold" type="submit">Sign Up</button>
        <button className="btn google-btn w-full p-3 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-gray-600 hover:border-blue-600 mt-3" onClick={handleGoogleSignUp}>
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5" /> Sign Up with Google
        </button>
        <p className="text-center text-sm text-gray-600 mt-3">Already have an account? <a href="/" className="link text-blue-600 hover:underline">Log In</a></p>
      </form>
    </div>
  );
}
```