import React, { useMemo, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import LoginModal from "../../components/ui/LoginModal";
import "./Appointment.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function buildCalendarDays(month, year) {
  const firstDayOfWeek = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = Array.from({ length: firstDayOfWeek }, () => null);
  const monthDays = Array.from({ length: daysInMonth }, (_, idx) => idx + 1);
  return [...leadingBlanks, ...monthDays];
}

export default function Appointment() {
  const today = useMemo(() => new Date(), []);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const days = useMemo(() => buildCalendarDays(currentMonth, currentYear), [currentMonth, currentYear]);

  const goPrev = () => {
    const prevMonth = currentMonth - 1;
    if (prevMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth(prevMonth);
    }
    setSelectedDay(null);
  };

  const goNext = () => {
    const nextMonth = currentMonth + 1;
    if (nextMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth(nextMonth);
    }
    setSelectedDay(null);
  };

  const isToday = (day) => {
    return (
      day &&
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const handleDayClick = (day) => {
    if (!day) return;
    setSelectedDay(day);
  };

  return (
    <>
      <Navbar openLoginModal={openLoginModal} />
      <div className="appointment-page">
        <div className="page-content">
          <div className="page-inner">
            <h2>Appointments & ID Status</h2>
            <div className="container">
            <div className="calendar-container">
              <div className="calendar-header">
                <span onClick={goPrev}>&#10094;</span>
                <div>{monthNames[currentMonth]} {currentYear}</div>
                <span onClick={goNext}>&#10095;</span>
              </div>
              <div className="calendar-grid">
                <div className="day header">Sun</div>
                <div className="day header">Mon</div>
                <div className="day header">Tue</div>
                <div className="day header">Wed</div>
                <div className="day header">Thu</div>
                <div className="day header">Fri</div>
                <div className="day header">Sat</div>
                {days.map((d, idx) => (
                  <div key={idx} className="day" onClick={() => handleDayClick(d)}>
                    {d ? (
                      isToday(d) ? (
                        <div className={`today${selectedDay === d ? " selected" : ""}`}>{d}</div>
                      ) : selectedDay === d ? (
                        <div className="selected">{d}</div>
                      ) : (
                        d
                      )
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="login-box">
              <h3>Log in to continue</h3>
              <button className="login-btn" onClick={openLoginModal}>Log In</button>
              <div className="divider"><span>or</span></div>
              <button className="google-btn">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
                Sign In with Google
              </button>
            </div>
          </div>
          </div>
          <Footer />
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </div>
      </div>
    </>
  );
}
