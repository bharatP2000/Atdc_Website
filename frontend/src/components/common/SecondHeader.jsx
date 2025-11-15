import React from "react";
import "./SecondHeader.css";
// import nabl from "../../assets/nabl.png";
// import qci from "../../assets/qci.png";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SecondHeader = () => {
  return (
    <div className="topHeader">

      <div className="topHeader-center">
        <div className="contact">
          <FaPhoneAlt className="icon" />
          <span>+91 33 71981800</span>
        </div>
        <div className="contact">
          <FaEnvelope className="icon" />
          <span>helpdesk@pulsediagnostics.com</span>
        </div>
      </div>

      <div className="topHeader-right">
        <button className="homeBtn">Book Appointment</button>
      </div>
    </div>
  );
};

export default SecondHeader;
