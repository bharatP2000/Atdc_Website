import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesAPI } from '../services/api';
import { toast } from 'react-toastify';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Blood Tests',
    'Urine Analysis',
    'Imaging',
    'Cardiology',
    'Dental',
    'Women Health',
    'Health Checkup'
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await servicesAPI.getAll();
      setServices(response.data.data);
    } catch (error) {
      toast.error('Failed to load services');
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading services...</p>
      </div>
    );
  }

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive diagnostic and healthcare services</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="services-list">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div key={service._id} className="service-item">
                  <div className="service-header">
                    <h3>{service.name}</h3>
                    <span className="service-category">{service.category}</span>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-details">
                    <div className="service-info">
                      <span className="service-price">₹{service.price}</span>
                      <span className="service-duration">{service.duration} mins</span>
                    </div>
                    {service.features && service.features.length > 0 && (
                      <ul className="service-features">
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Link
                    to="/appointments"
                    state={{ selectedService: service }}
                    className="btn btn-primary"
                  >
                    Book Now
                  </Link>
                </div>
              ))
            ) : (
              <div className="no-services">
                <p>No services found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;