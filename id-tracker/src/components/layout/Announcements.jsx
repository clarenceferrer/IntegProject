import React from "react";
import "./Announcements.css";
import announcementBg from "../../assets/announcement.png"; // your yellow+blue combined image
import micImage from "../../assets/microphone.png"; // your mic image

export default function Announcements() {
  return (
    <section className="announcements">
      {/* Background */}
      <div className="announcements-bg">
        <img src={announcementBg} alt="Announcements Background" />
      </div>

      {/* Overlay content */}
      <div className="announcements-overlay">
        <h2 className="announcements-title">ITSO Announcements</h2>

        <div className="announcements-content">
          {/* Mic */}
          <div className="icon">
            <img src={micImage} alt="Mic" />
          </div>

          {/* Text */}
          <div className="text">
            <p>
              <span className="new">new</span>{" "}
              <span className="bold">Important updates from ITSO...</span>
            </p>
            <p>dapat mong malaman walang personalan</p>
            <p>wala na id mo</p>
            <p>ang aking kasagutan ay hindi po atee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
