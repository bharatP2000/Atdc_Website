import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactCard}>
        <h1 className={classes.heading}>Contact Us</h1>
        <p className={classes.subHeading}>
          We’d love to hear from you! Fill out the form below and our team will reach out soon.
        </p>

        <form className={classes.contactForm}>
          <div className={classes.formGroup}>
            <label className={classes.label}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={classes.input}
            />
          </div>

          <div className={classes.formGroup}>
            <label className={classes.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={classes.input}
            />
          </div>

          <div className={classes.formGroup}>
            <label className={classes.label}>Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className={classes.textarea}
            ></textarea>
          </div>

          <button type="submit" className={classes.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
