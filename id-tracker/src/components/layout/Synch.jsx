import React from "react";
import "./synch.css"; 
import nuLogo from "../../assets/nu-logo.png"; 
import googleCalendar from "../../assets/calendar.png"; 
import { FaLink } from "react-icons/fa"; // chain icon

export default function Synch() {
  return (
    <section className="synch">
      <div className="synch-container">
        
        <img src={nuLogo} alt="NU Logo" className="synch-logo" />

        <div className="synch-divider"></div>

        <div className="synch-text">
          <div className="synch-heading">
            <FaLink className="chain-icon" />
            <h2>Synced with <br /> Google Calendar</h2>
          </div>
          <p>
            Your appointments are automatically added to your Google Calendar.
            Built and maintained by the ITSO Department of NU Dasmariñas to make
            your student ID process smoother and faster.
          </p>
        </div>

        <div className="synch-divider"></div>

        <img src={googleCalendar} alt="Google Calendar Logo" className="synch-logo" />
      </div>
    </section>
  );
}


