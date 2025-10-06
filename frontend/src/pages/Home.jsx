import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaMicroscope, FaXRay, FaTooth, FaHeartbeat, FaUserMd } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaMicroscope />,
      title: 'Blood Tests',
      description: 'Comprehensive blood testing with accurate results'
    },
    {
      icon: <FaXRay />,
      title: 'Imaging Services',
      description: 'X-Ray, CT Scan, MRI, and Ultrasound'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      description: 'ECG, Echo, Holter monitoring services'
    },
    {
      icon: <FaTooth />,
      title: 'Dental Care',
      description: 'Complete dental care and treatment'
    },
    {
      icon: <FaStethoscope />,
      title: 'Health Checkup',
      description: 'Preventive health screening packages'
    },
    {
      icon: <FaUserMd />,
      title: 'Expert Doctors',
      description: 'Experienced medical professionals'
    }
  ];

  const features = [
    { number: '10+', text: 'Years of Service' },
    { number: '50K+', text: 'Happy Patients' },
    { number: '100+', text: 'Diagnostic Tests' },
    { number: '24/7', text: 'Support Available' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Quality Healthcare at Affordable Prices</h1>
            <p>
              ATDC Care - Acharya Tulsi Diagnostic Centre, providing comprehensive
              diagnostic and dental services in Kolkata since 2012
            </p>
            <div className="hero-buttons">
              <Link to="/appointments" className="btn btn-primary">
                Book Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h2>{feature.number}</h2>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive diagnostic and healthcare services under one roof</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About ATDC Care</h2>
              <p>
                Acharya Tulsi Diagnostic Centre (ATDC), a Jain Charitable Organization,
                was established in 2012 under the auspices of Akhil Bhartiya Terapanth
                Yuvak Parishad (ABTYP) that pledges to serve the country through community
                services and help the needy with affordable treatment and health care.
              </p>
              <p>
                ATDC Purvanchal Kolkata was established in 2019 in Lake Town, Kolkata to
                provide quality health check-up facilities at an affordable price.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <FaStethoscope />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Book Your Appointment?</h2>
          <p>Get quality healthcare services at affordable prices</p>
          <Link to="/appointments" className="btn btn-light">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;