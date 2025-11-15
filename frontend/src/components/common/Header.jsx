import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import atdclogo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav') && !e.target.closest('button')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        :root {
          --primary-green: #1a661a;
          --primary-light: #e6f4e6;
          --dark-color: #0a3d0a;
          --text-color: #2e7d32;
          --transition: 0.3s;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .header {
          background-color: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .logoImage {
          width: 150px;
          height: auto;
          margin-right: 20px;
          vertical-align: middle;
        }

        .topBar {
          background-color: var(--primary-green);
          color: white;
          font-size: 14px;
          padding: 6px 0;
        }

        .topBarWrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contactInfo {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .contactInfo span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .topBarRight {
          font-style: italic;
          opacity: 0.9;
        }

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logoContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-shrink: 0;
        }

        .logo {
          text-decoration: none;
          color: var(--primary-green);
          display: block;
        }

        .logo h1 {
          font-size: clamp(18px, 3vw, 26px);
          margin: 0;
          font-weight: 700;
          line-height: 1.2;
        }

        .logo span {
          font-size: clamp(10px, 2vw, 12px);
          color: var(--text-color);
          display: block;
          line-height: 1.3;
        }

        .nav {
          display: flex;
          gap: 25px;
          align-items: center;
        }

        .nav a {
          text-decoration: none;
          color: var(--dark-color);
          font-weight: 500;
          font-size: clamp(14px, 2vw, 16px);
          position: relative;
          transition: var(--transition);
          cursor: pointer;
        }

        .nav a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-green);
          transition: var(--transition);
        }

        .nav a:hover {
          color: var(--primary-green);
        }

        .nav a:hover::after {
          width: 100%;
        }

        .userMenu {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .userName {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: clamp(13px, 2vw, 15px);
          color: var(--primary-green);
        }

        .btnLogout {
          background-color: var(--primary-green);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: clamp(13px, 2vw, 15px);
          transition: var(--transition);
          white-space: nowrap;
        }

        .btnLogout:hover {
          background-color: #145214;
        }

        .toggleBtn {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          color: var(--primary-green);
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
          margin-left: auto;
        }

        /* Tablet breakpoint */
        @media (max-width: 968px) {
          .wrapper {
            padding: 12px 15px;
          }

          .logoImage {
            width: 90px;
            margin-right: 10px;
          }

          .logo h1 {
            font-size: 16px;
          }

          .logo span {
            font-size: 9px;
          }

          .toggleBtn {
            display: block;
            position: relative;
            width: fit-content;
            z-index: 1002;
          }

          .nav {
            position: fixed;
            top: -100%;
            left: 0;
            width: 100%;
            background: linear-gradient(135deg, var(--primary-green), #145214);
            flex-direction: column;
            padding: 100px 30px 40px;
            gap: 0;
            transition: top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            overflow-y: auto;
            align-items: stretch;
            max-width: 100vw;
            max-height: 100vh;
            z-index: 1001;
          }

          .nav.open {
            top: 0;
          }

          .nav a {
            width: 100%;
            padding: 16px 20px;
            font-size: 16px;
            color: white;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            margin-bottom: 10px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          .nav a:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(8px);
            color: white;
          }

          .nav a::after {
            display: none;
          }

          .userMenu {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
            padding-top: 20px;
            margin-top: 20px;
            border-top: 2px solid rgba(255, 255, 255, 0.2);
            gap: 15px;
          }

          .userName {
            font-size: 15px;
            color: white;
            padding: 12px 20px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            justify-content: center;
          }

          .btnLogout {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
            font-size: 15px;
            background: white;
            color: var(--primary-green);
            border: none;
            font-weight: 600;
          }

          .btnLogout:hover {
            background: var(--primary-light);
            transform: scale(1.02);
          }

          .nav.open::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: -1;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .wrapper {
            padding: 10px 12px;
          }

          .logoImage {
            width: 70px;
            margin-right: 8px;
          }

          .logo h1 {
            font-size: 14px;
          }

          .logo span {
            font-size: 8px;
          }

          .nav {
            padding: 70px 20px 30px;
          }

          .nav a {
            font-size: 15px;
            padding: 14px 16px;
          }

          .toggleBtn {
            font-size: 22px;
          }
        }

        /* Small mobile breakpoint */
        @media (max-width: 480px) {
          .wrapper {
            padding: 8px 10px;
          }

          .logoImage {
            width: 60px;
            margin-right: 6px;
          }

          .logo h1 {
            font-size: 13px;
          }

          .logo span {
            font-size: 7px;
          }

          .nav {
            padding: 60px 15px 25px;
            gap: 0;
          }

          .nav a {
            font-size: 14px;
            padding: 12px 14px;
            margin-bottom: 8px;
          }

          .btnLogout {
            padding: 12px 16px;
            font-size: 14px;
          }

          .userName {
            font-size: 14px;
            padding: 10px 14px;
          }

          .toggleBtn {
            font-size: 20px;
            padding: 6px;
          }
        }

        /* Hide topBar on mobile */
        @media (max-width: 768px) {
          .topBar {
            display: none;
          }
        }

        /* Demo content spacer */
        .content {
          margin-top: 80px;
          padding: 20px;
          text-align: center;
        }
      `}</style>

      <div className="topBar">
        <div className="topBarWrapper">
          <div className="contactInfo">
            <span><FaPhoneAlt /> +91 98765 43210</span>
            <span><FaEnvelope /> info@atdchealth.com</span>
          </div>
          <div className="topBarRight">
            <span>Your trusted healthcare partner</span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="wrapper">
          <div className="logoContainer">
            <div className="logoImage" style={{
              width: '150px',
              height: '60px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img 
                src={atdclogo} 
                alt="Company Logo" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <a href="/" className="logo">
              <h1>ATDC Health</h1>
              <span>Acharya Tulsi Diagnostic Centre</span>
            </a>
          </div>

          <nav className={`nav ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>

          <button className="toggleBtn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;