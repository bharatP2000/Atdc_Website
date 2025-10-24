import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import classes from './Header.module.css';

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
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.logo}>
          <h1>ATDC Care</h1>
          <span>Acharya Tulsi Diagnostic Centre</span>
        </Link>

        <nav className={`${classes.nav} ${isOpen ? classes.open : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/appointments" onClick={() => setIsOpen(false)}>Appointments</Link>
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
  );
};

export default Header;
