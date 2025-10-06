import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>ATDC Care</h1>
            <span>Acharya Tulsi Diagnostic Centre</span>
          </Link>

          <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/appointments" onClick={() => setIsOpen(false)}>Appointments</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            
            {user ? (
              <div className="user-menu">
                <span className="user-name">
                  <FaUser /> {user.name}
                </span>
                <button onClick={handleLogout} className="btn-logout">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="btn-register" onClick={() => setIsOpen(false)}>
                  Register
                </Link>
              </div>
            )}
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;