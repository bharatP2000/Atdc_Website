import React, { useEffect, useRef, useState } from 'react';
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
    { number: 10, suffix: '+', text: 'Years of Service' },
    { number: 50000, suffix: '+', text: 'Happy Patients' },
    { number: 100, suffix: '+', text: 'Diagnostic Tests' },
    { number: 24, suffix: '/7', text: 'Support Available' },
  ];

  // ✨ Animation Logic
  const [animatedValues, setAnimatedValues] = useState(features.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);

      setAnimatedValues(features.map((f) => Math.floor(f.number * progress)));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // ensure final exact numbers
        setAnimatedValues(features.map((f) => f.number));
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className={classes.home}>
      {/* Hero Section */}
      <section className={classes.hero}>
        <div className={classes.container}>
          <div className={classes.heroContent}>
            <h1>Healthcare Excellence Now in Howrah!</h1>
            <p>
              Experience world-class healthcare with <strong>ATDC Health - Acharya Tulsi Diagnostic Centre</strong>. 
              We bring you comprehensive diagnostic services, advanced dental care, and expert medical consultation 
              under one roof. With state-of-the-art technology and a team of experienced professionals, 
              we're committed to your health and well-being.
            </p>
            <p className={classes.trustBadge}>
              <strong>Trusted by thousands across various cities in India since 2012</strong>
            </p>
            <div className={classes.heroButtons}>
              <button className={classes.btnPrimary} disabled>
                Book Appointment <span className={classes.comingSoon}>(Coming Soon)</span>
              </button>
              <Link to="/services" className={classes.btnSecondary}>View Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section
      <section className={classes.features} ref={sectionRef}>
        <div className={classes.container}>
          <div className={classes.sectionHeader}>
            <h2>Why Choose Us?</h2>
            <p>Discover what makes us different.</p>
          </div>
          <div className={classes.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={classes.featureCard}>
                <h2>
                  {animatedValues[i].toLocaleString()}
                  <span className={classes.suffix}>{f.suffix}</span>
                </h2>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
          {/* <div className={classes.servicesCta}>
            <Link to="/services" className={classes.btnPrimary}>View All Services</Link>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section className={classes.aboutPreview}>
        <div className={classes.container}>
          <div className={classes.aboutContent}>
            <div className={classes.aboutText}>
              <h2>About ATDC Health</h2>
              <p>
                Acharya Tulsi Diagnostic Centre (ATDC) was established in 2012 under the auspices of Akhil Bhartiya Terapanth
                Yuvak Parishad (ABTYP). We pledge to serve the community through affordable
                treatment and diagnostic care.
              </p>
              <p>
                ATDC Uttar Howrah is established to provide quality health
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
      <section style={styles.cta}>
        <div style={styles.container}>
          {/* Main Content */}
          <div style={styles.content}>
            <div style={styles.badge}>
              <span style={styles.badgeIcon}>🚀</span>
              <span style={styles.badgeText}>Coming Soon</span>
            </div>
            
            <h2 style={styles.heading}>
              Online Appointments Are Almost Here
            </h2>
            
            <p style={styles.description}>
              Experience hassle-free healthcare management at your fingertips. Book appointments instantly, manage your health records seamlessly, and get quality care—all without the wait.
            </p>

            {/* Features Preview */}
            <div style={styles.features}>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}>📅</span>
                <span style={styles.featureText}>Easy Scheduling</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}>⏰</span>
                <span style={styles.featureText}>24/7 Booking</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}>💳</span>
                <span style={styles.featureText}>Secure Payments</span>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div style={styles.ctaButtons}>
              <button style={styles.btnPrimary}>
                <span style={styles.btnIcon}>🔔</span>
                Notify Me When Ready
              </button>
              <button style={styles.btnSecondary}>
                <span style={styles.btnIcon}>📞</span>
                Call to Book Now
              </button>
            </div> */}

            {/* Contact Info */}
            <div style={styles.contactInfo}>
              <p style={styles.contactText}>
                In the meantime, call us at <strong style={styles.phoneNumber}>+91 98301-16690</strong>
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div style={styles.decorativeCircle1}></div>
          <div style={styles.decorativeCircle2}></div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  cta: {
    width: '90%',
    margin: '0 auto 60px',
    background: 'linear-gradient(135deg, #2e8b57 0%, #1e6f45 100%)',
    color: '#ffffff',
    padding: 'clamp(60px, 10vw, 100px) 20px',
    borderRadius: 'clamp(16px, 3vw, 24px)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(46, 139, 87, 0.3)',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    padding: '0 clamp(10px, 3vw, 20px)',
  },
  content: {
    textAlign: 'center',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'clamp(6px, 1.5vw, 8px)',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: 'clamp(8px, 2vw, 10px) clamp(18px, 4vw, 24px)',
    borderRadius: '50px',
    marginBottom: 'clamp(16px, 3vw, 24px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    animation: 'pulse 2s ease-in-out infinite',
  },
  badgeIcon: {
    fontSize: 'clamp(16px, 3vw, 18px)',
  },
  badgeText: {
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heading: {
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  description: {
    fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
    lineHeight: '1.8',
    marginBottom: 'clamp(30px, 5vw, 40px)',
    opacity: '0.95',
    maxWidth: '650px',
    margin: '0 auto',
    marginBottom: 'clamp(30px, 5vw, 40px)',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 'clamp(16px, 3vw, 24px)',
    marginBottom: 'clamp(30px, 5vw, 40px)',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(8px, 2vw, 10px)',
    background: 'rgba(255, 255, 255, 0.15)',
    padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)',
    borderRadius: 'clamp(10px, 2vw, 12px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  featureIcon: {
    fontSize: 'clamp(18px, 3.5vw, 20px)',
  },
  featureText: {
    fontSize: 'clamp(13px, 2.5vw, 15px)',
    fontWeight: '500',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 'clamp(12px, 2.5vw, 16px)',
    marginBottom: 'clamp(24px, 4vw, 32px)',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(8px, 2vw, 10px)',
    background: '#ffffff',
    color: '#2e8b57',
    padding: 'clamp(14px, 2.5vw, 16px) clamp(28px, 5vw, 36px)',
    borderRadius: '50px',
    border: 'none',
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    minWidth: 'clamp(180px, 35vw, 200px)',
    width: '100%',
    maxWidth: '300px',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(8px, 2vw, 10px)',
    background: 'transparent',
    color: '#ffffff',
    padding: 'clamp(14px, 2.5vw, 16px) clamp(28px, 5vw, 36px)',
    borderRadius: '50px',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: 'clamp(180px, 35vw, 200px)',
    width: '100%',
    maxWidth: '300px',
  },
  btnIcon: {
    fontSize: 'clamp(16px, 3vw, 18px)',
  },
  contactInfo: {
    marginTop: 'clamp(20px, 3vw, 24px)',
    paddingTop: 'clamp(20px, 3vw, 24px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },
  contactText: {
    fontSize: 'clamp(13px, 2.5vw, 15px)',
    opacity: '0.9',
    margin: 0,
  },
  phoneNumber: {
    fontSize: 'clamp(16px, 3vw, 18px)',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 'clamp(250px, 50vw, 400px)',
    height: 'clamp(250px, 50vw, 400px)',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
    top: 'clamp(-125px, -25vw, -200px)',
    right: 'clamp(-125px, -25vw, -200px)',
    pointerEvents: 'none',
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 'clamp(200px, 40vw, 300px)',
    height: 'clamp(200px, 40vw, 300px)',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
    bottom: 'clamp(-100px, -20vw, -150px)',
    left: 'clamp(-100px, -20vw, -150px)',
    pointerEvents: 'none',
  },
};

// Add hover effects using inline styles simulation
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    button:active {
      transform: translateY(0);
    }
    
    @media (max-width: 768px) {
      button {
        width: 100%;
        max-width: 300px;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Home;
