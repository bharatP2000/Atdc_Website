import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footerContent}>
          <div className={classes.footerSection}>
            <h3>ATDC Care</h3>
            <p>
              Acharya Tulsi Diagnostic Centre, a Jain Charitable Organization providing
              quality healthcare services at affordable prices since 2012.
            </p>
            <div className={classes.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className={classes.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/appointments">Book Appointment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={classes.footerSection}>
            <h4>Our Services</h4>
            <ul>
              <li>Blood Tests</li>
              <li>X-Ray & Imaging</li>
              <li>Cardiology</li>
              <li>Dental Care</li>
              <li>Health Checkups</li>
            </ul>
          </div>

          <div className={classes.footerSection}>
            <h4>Contact Us</h4>
            <ul className={classes.contactInfo}>
              <li>
                <FaMapMarkerAlt />
                <span>Lake Town, Kolkata, West Bengal</span>
              </li>
              <li>
                <FaPhone />
                <span>+91 1234567890</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@atdccare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.footerBottom}>
          <p>&copy; {new Date().getFullYear()} ATDC Care. All rights reserved.</p>
          <div className={classes.footerLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
