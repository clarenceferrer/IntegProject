```jsx
import React from 'react'
import ReactDOM from 'https://cdn.jsdelivr.net/npm/react@18.3.1/+esm'
import { BrowserRouter, Routes, Route } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/+esm'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import CreateAccount from './components/CreateAccount.jsx'
import ForgotPassword from './components/ForgotPassword.jsx'
import CheckEmail from './components/CheckEmail.jsx'
import SetNewPassword from './components/SetNewPassword.jsx'
import PasswordReset from './components/PasswordReset.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
```