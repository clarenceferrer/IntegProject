import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/shared/LandingPage'
import Appointment from './pages/shared/Appointment'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
