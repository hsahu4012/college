import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="main-container">
        <div className="content-grid">
          {/* Venue Location Section */}
          <div className="venue-section">
            <h2 className="section-title">Venue Location</h2>
            <div className="venue-details">
              <div className="venue-item">
                <span className="icon date-icon">
                  <svg viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                </span>
                <span className="date-text">4-5 July, 2025</span>
              </div>

              <div className="venue-item">
                <span className="icon location-icon">
                  <svg viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="location-text">GITA Autonomous College, Bhubaneswar, Odisha, India.</span>
              </div>

              <div className="venue-item">
                <span className="icon contact-icon">
                  <svg viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <button className="contact-button">Contact Our Authority</button>
              </div>
            </div>
          </div>

          {/* Social Connection Section */}
          <div className="social-section">
            <h2 className="section-title">Social Connection</h2>
            <p className="social-text">
              Don't miss a thing! Receive daily news You should connect social area for Any Proper Updates Anytime.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <span className="sr-only">Facebook</span>
                <svg viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>

              <a href="#" className="social-icon twitter">
                <span className="sr-only">Twitter</span>
                <svg viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              <a href="#" className="social-icon instagram">
                <span className="sr-only">Instagram</span>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a href="#" className="social-icon linkedin">
                <span className="sr-only">LinkedIn</span>
                <svg viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>



      <div className="footer-container">
        <div className="logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPTXtnEHUZvQ5IhWrzbC8mZ3uQbkHvDGZAg&s"
            alt="GITA Autonomous College Logo"
            className="university-logo"
          />
        </div>

        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <span className="dot">•</span>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <span className="dot">•</span>
            </li>
            <li className="nav-item">
              <a href="/committee" className="nav-link">Committee</a>
            </li>
            <li className="nav-item">
              <span className="dot">•</span>
            </li>
            <li className="nav-item">
              <a href="/call-for-paper" className="nav-link">Call For Paper</a>
            </li>
            <li className="nav-item">
              <span className="dot">•</span>
            </li>
            <li className="nav-item">
              <a href="/registration" className="nav-link">Registration</a>
            </li>
            <li className="nav-item">
              <span className="dot">•</span>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="credits">
          <p className="credits-text">
            Designed and Developed by
          </p>
          <p className="highlight">Centre for Data Science</p>
        </div>

        <div className="home-icon">
          <a href="#top" className="scroll-top">
            <svg viewBox="0 0 24 24" className="home-svg">
              <path d="M3 L12 3 L21 12 L18 12 L12 6 L6 12 L3 12 Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
