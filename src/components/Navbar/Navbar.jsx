import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'active' : ''}`}>
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPTXtnEHUZvQ5IhWrzbC8mZ3uQbkHvDGZAg&s" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="#">COMMITTEE</a></li>
        <li><a href="#">CALL FOR PAPER</a></li>
        <li><a href="/registration">REGISTRATION</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
    </div>
  );
}

export default Navbar;
