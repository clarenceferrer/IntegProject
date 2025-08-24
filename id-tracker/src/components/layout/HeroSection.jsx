import React from "react";
import "./HeroSection.css";
import heroID from "../../assets/landingbackground.png";
import { FiArrowUpRight } from "react-icons/fi"; // northeast arrow

export default function HeroSection({ openLoginModal }) {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroID})` }}
    >
      <div className="hero-right">
        <h1>
          <span className="blue-text">Welcome</span>
        </h1>
        <h1>
          <span className="yellow-text"> to ITSO ID Tracker!</span>
        </h1>
        <p className="subtitle">
          Manage your student ID appointment<br /> with ease
        </p>
        <button className="get-started" onClick={openLoginModal}>
          Get Started <FiArrowUpRight className="arrow" />
        </button>
      </div>
    </section>
  );
}


