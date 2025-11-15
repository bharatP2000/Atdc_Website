import React from 'react';
import { FaAward, FaUsers, FaHeart, FaHandshake } from 'react-icons/fa';
import classes from './About.module.css';

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Patient Care',
      description:
        'We prioritize patient wellbeing and provide compassionate care to everyone.',
      description:
        'We prioritize patient wellbeing and provide compassionate care to everyone.',
    },
    {
      icon: <FaAward />,
      title: 'Quality Service',
      description:
        'Delivering accurate diagnostic results with state-of-the-art equipment.',
      description:
        'Delivering accurate diagnostic results with state-of-the-art equipment.',
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description:
        'Experienced medical professionals dedicated to your health.',
      description:
        'Experienced medical professionals dedicated to your health.',
    },
    {
      icon: <FaHandshake />,
      title: 'Affordability',
      description:
        'Quality healthcare services at prices everyone can afford.',
    },
    {
      description:
        'Quality healthcare services at prices everyone can afford.',
    },
  ];

  return (
    <div className={classes.aboutPage}>

      {/* ------- ATDC INTRO FIRST ------- */}
      <section className={classes.pageHeader}>
        <div className={classes.container}>
          <h1>Acharya Tulsi Diagnostic Centre</h1>
          <p>A Trusted Name in Affordable & Quality Healthcare</p>
        </div>
      </section>

      {/* Story Section STARTS IMMEDIATELY */}
      <section className={classes.aboutIntro}>
        <div className={classes.container}>
          <div className={classes.aboutContent}>
            <h2>About ATDC</h2>
            <p>
              Acharya Tulsi Diagnostic Centre (ATDC), a Jain Charitable
              Organization, was established in 2012 under the auspices of
              Akhil Bhartiya Terapanth Yuvak Parishad (ABTYP). ATDC was founded
              with a vision to serve society through community healthcare and
              support the needy with affordable treatment and diagnostics.
            </p>

            <p>
              ATDC is one of the leading diagnostic chains in India, offering best-in-class
              laboratory testing services at economical prices. ATDC Purvanchal Kolkata was
              established in the year 2019 in Lake Town, Kolkata by Terapanth Yuvak Parishad,
              Purvanchal Kolkata to provide quality health check-up facilities at an
              affordable price.
            </p>

            <p>
              It is a reputable facility offering a wide range of Diagnostic and Dental
              services to the community. The centre provides a comprehensive range of
              diagnostic tests including blood tests, urine analysis, X-ray, USG, Echo,
              Holter, NCV, EMG, CT Scan, MRI, Endoscopy, Colonoscopy, and Mammography.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={classes.valuesSection}>
        <div className={classes.container}>
          <h2>Our Values</h2>
          <div className={classes.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={classes.valueCard}>
                <div className={classes.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={classes.missionVision}>
        <div className={classes.container}>
          <div className={classes.mvGrid}>
            <div className={classes.mvCard}>
              <h2>Our Mission</h2>
              <p>
                To provide accessible, affordable, and quality diagnostic and healthcare
                services to all sections of society, helping people maintain and improve
                their health through early detection and preventive care.
              </p>
            </div>
            <div className={classes.mvCard}>
              <h2>Our Vision</h2>
              <p>
                To become the most trusted and preferred diagnostic center in Eastern India,
                known for our commitment to quality, affordability, and compassionate care,
                while serving the community through charitable healthcare initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className={classes.statsSection}>
        <div className={classes.container}>
          <div className={classes.statsGrid}>
            <div className={classes.statCard}>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className={classes.statCard}>
              <h3>50,000+</h3>
              <p>Patients Served</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <p>Diagnostic Tests</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Expert Staff</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
