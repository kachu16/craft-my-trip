import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12l18-9-9 18-2-7-7-2z" fill="#2563eb" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="logo-text">Craft My Trip</h1>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="/" className="nav-item">Home</a></li>
            <li><a href="/plan" className="nav-item active">Plan a Trip</a></li>
            <li><a href="/my-trips" className="nav-item">My Trips</a></li>
            <li><a href="/about" className="nav-item">About Us</a></li>
            <li><a href="/contact" className="nav-item">Contact</a></li>
          </ul>

          {/* Mobile Buttons (Visible inside menu on mobile) */}
          <div className="mobile-auth-buttons">
            <button className="btn-signup">Sign Up</button>
            <button className="btn-login">Log In</button>
          </div>
        </nav>

        {/* Right Side Actions (Desktop) */}
        <div className="header-actions">
          <button className="btn-signup">Sign Up</button>
          <button className="btn-login">Log In</button>
          
          <div className="user-profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>

          {/* Hamburger Menu Icon */}
          <button className="hamburger-menu" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;