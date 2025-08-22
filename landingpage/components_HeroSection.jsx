```jsx
import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-section" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080.png?text=Hero+Background')" }}>
      <div className="hero-right bg-opacity-10 bg-white rounded-3xl p-8">
        <h1 className="text-4xl md:text-6xl font-bold"><span className="blue-text">NU Dasmarinas</span><br /><span className="yellow-text">ITSO ID Tracker</span></h1>
        <p className="subtitle text-lg md:text-xl text-white mb-4 font-montserrat">Track and manage your student ID efficiently with our system.</p>
        <button className="get-started bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 flex items-center gap-2 text-lg font-semibold">Get Started <span className="arrow">→</span></button>
      </div>
    </div>
  );
}
```