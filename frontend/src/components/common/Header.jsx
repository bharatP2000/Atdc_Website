import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import classes from './Header.module.css';
import logo from '../../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* <div className={classes.topBar}>
        <div className={classes.topBarWrapper}>
          <div className={classes.contactInfo}>
            <span><FaPhoneAlt /> +91 98765 43210</span>
            <span><FaEnvelope /> info@atdchealth.com</span>
          </div>
          <div className={classes.topBarRight}>
            <span>Your trusted healthcare partner</span>
          </div>
        </div>
      </div> */}

      {/* 🌿 Main Header */}
      <header className={classes.header}>
        <div className={classes.wrapper}>
          <div style={{display:'flex', flexDirection:'row'}}>
          <img src={logo} className={classes.logoImage} alt="ATDC Health Logo" />
          <Link to="/" className={classes.logo}>
            <h1>ATDC Health</h1>
            <span>Acharya Tulsi Diagnostic Centre</span>
          </Link>
          </div>

          <nav className={`${classes.nav} ${isOpen ? classes.open : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

            {user ? (
              <div className={classes.userMenu}>
                <span className={classes.userName}><FaUser /> {user.name}</span>
                <button onClick={handleLogout} className={classes.btnLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <></>
            )}
          </nav>

          <button className={classes.toggleBtn} onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
