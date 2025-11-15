import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowAltCircleDown } from 'react-icons/fa';
import classes from './Footer.module.css';
import devlogo from '../../assets/developerlogo.png';
=======
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import classes from './Footer.module.css';
>>>>>>> 4e051a8cda95a731ae2443fdc2aceffd32ae3024

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footerContent}>
          <div className={classes.footerSection}>
<<<<<<< HEAD
            <h3>ATDC Health</h3>
=======
            <h3>ATDC Care</h3>
>>>>>>> 4e051a8cda95a731ae2443fdc2aceffd32ae3024
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
                <span>Vindhyachal Apartment, Howrah, West Bengal</span>
              </li>
              <li>
                <FaPhone />
                <span>033 2665-0022</span>
              </li>
              <li>
                <FaEnvelope />
                <span>typuhtrust@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.footerBottom}>
<<<<<<< HEAD
          <p>&copy; {new Date().getFullYear()} ATDC Health. All rights reserved.</p>
{/* 
          <div className={classes.pbLogo}>
            <span>Developed & Maintained by </span>
            <br/>
            <img 
              src={devlogo}        // <-- replace with your logo import or URL
              alt="PB Developers Logo"
              className={classes.devLogo}
            />
            <span>PB Developers</span>
          </div> */}

=======
          <p>&copy; {new Date().getFullYear()} ATDC Care. All rights reserved.</p>
>>>>>>> 4e051a8cda95a731ae2443fdc2aceffd32ae3024
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
