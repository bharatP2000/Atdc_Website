import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaStethoscope,
  FaMicroscope,
  FaXRay,
  FaTooth,
  FaHeartbeat,
  FaUserMd,
} from 'react-icons/fa';
import classes from './Home.module.css';

const Home = () => {
  const services = [
    { icon: <FaMicroscope />, title: 'Blood Tests', description: 'Comprehensive blood testing with accurate results' },
    { icon: <FaXRay />, title: 'Imaging Services', description: 'X-Ray, CT Scan, MRI, and Ultrasound' },
    { icon: <FaHeartbeat />, title: 'Cardiology', description: 'ECG, Echo, Holter monitoring services' },
    { icon: <FaTooth />, title: 'Dental Care', description: 'Complete dental care and treatment' },
    { icon: <FaStethoscope />, title: 'Health Checkup', description: 'Preventive health screening packages' },
    { icon: <FaUserMd />, title: 'Expert Doctors', description: 'Experienced medical professionals' },
  ];

  const features = [
    { number: '10+', text: 'Years of Service' },
    { number: '50K+', text: 'Happy Patients' },
    { number: '100+', text: 'Diagnostic Tests' },
    { number: '24/7', text: 'Support Available' },
  ];

  return (
    <div className={classes.home}>
      {/* Hero Section */}
      <section className={classes.hero}>
        <div className={classes.container}>
          <div className={classes.heroContent}>
            <h1>Quality Healthcare at Affordable Prices</h1>
            <p>
              ATDC Care - Acharya Tulsi Diagnostic Centre, providing comprehensive
              diagnostic and dental services in Kolkata since 2012.
            </p>
            <div className={classes.heroButtons}>
              <Link to="/appointments" className={classes.btnPrimary}>Book Appointment</Link>
              <Link to="/services" className={classes.btnSecondary}>View Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={classes.features}>
        <div className={classes.container}>
          <div className={classes.sectionHeader}>
            <h2>Why Choose Us?</h2>
            <p>Discover what makes us different.</p>
          </div>
          <div className={classes.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={classes.featureCard}>
                <h2>{f.number}</h2>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={classes.servicesPreview}>
        <div className={classes.container}>
          <div className={classes.sectionHeader}>
            <h2>Our Services</h2>
            <p>Comprehensive diagnostic and healthcare services under one roof</p>
          </div>
          <div className={classes.servicesGrid}>
            {services.map((s, i) => (
              <div key={i} className={classes.serviceCard}>
                <div className={classes.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <div className={classes.servicesCta}>
            <Link to="/services" className={classes.btnPrimary}>View All Services</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={classes.aboutPreview}>
        <div className={classes.container}>
          <div className={classes.aboutContent}>
            <div className={classes.aboutText}>
              <h2>About ATDC Care</h2>
              <p>
                Acharya Tulsi Diagnostic Centre (ATDC), a Jain Charitable Organization,
                was established in 2012 under the auspices of Akhil Bhartiya Terapanth
                Yuvak Parishad (ABTYP). We pledge to serve the community through affordable
                treatment and diagnostic care.
              </p>
              <p>
                ATDC Purvanchal Kolkata was established in 2019 to provide quality health
                check-up facilities at an affordable price.
              </p>
              <Link to="/about" className={classes.btnSecondary}>Learn More</Link>
            </div>
            <div className={classes.aboutImage}>
              <div className={classes.imagePlaceholder}>
                <FaStethoscope />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={classes.cta}>
        <div className={classes.container}>
          <h2>Ready to Book Your Appointment?</h2>
          <p>Get quality healthcare services at affordable prices</p>
          <Link to="/appointments" className={classes.btnLight}>Book Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
