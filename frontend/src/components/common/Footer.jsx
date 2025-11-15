import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowAltCircleDown } from 'react-icons/fa';
import classes from './Footer.module.css';
import devlogo from '../../assets/developerlogo.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footerContent}>
          <div className={classes.footerSection}>
            <h3>ATDC Health</h3>
            <p>
              Acharya Tulsi Diagnostic Centre providing
              quality healthcare services at affordable prices since 2012.
            </p>
            <div className={classes.socialLinks}>
              <a href="https://www.facebook.com/share/1BTeSC4Zxv/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a> */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a> */}
            </div>
          </div>

          <div className={classes.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
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
                <a 
                  href="https://maps.app.goo.gl/uEt784u3AeT7oYDJ9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Vindhyachal Apartment,<br/> 35 Abani Dutta Road, Howrah, West Bengal
                </a>
              </li>
              <li>
                <FaPhone />
                <a 
                  href="tel:+913326650022" 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  033 2665-0022
                </a>
              </li>
              <li>
                <FaEnvelope />
                <a 
                  href="mailto:atdcuttarhowrah@gmail.com"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  atdcuttarhowrah@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.footerBottom}>
          

          <div className={classes.developerCredit}>
            <span className={classes.developedBy}>Developed & Maintained by</span>
            <a 
              href="https://www.linkedin.com/in/bharat-kumar-baid-7b6351196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes.developerLink}
            >
              <span className={classes.developerName}>BHARAT KUMAR BAID</span>
            </a>
            <br/>
            <p>&copy; {new Date().getFullYear()} ATDC Health. All rights reserved.</p>
          </div>

          

          {/* <div className={classes.footerLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
