import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { servicesAPI } from "../services/api";
import { toast } from "react-toastify";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static categories shown as tiles
  const serviceCategories = [
  {
    title: "All Tests", 
    icon: "💊",
    description: "Comprehensive testing with accurate results",
    category: "All Tests",
  },
  {
    title: "Blood Tests",
    icon: "🧪",
    description: "CBC, Lipid Profile, Liver & Kidney function tests",
    category: "Blood Tests",
  },
  {
    title: "Imaging Services",
    icon: "🏥",
    description: "X-Ray, USG Abdomen imaging services",
    category: "Imaging",
  },
  {
    title: "Cardiology",
    icon: "❤️",
    description: "ECG, Echo, TMT stress test services",
    category: "Cardiology",
  },
  {
    title: "Dental Care",
    icon: "🦷",
    description: "General dental checkup and consultation",
    category: "Dental",
  },
  {
    title: "Thyroid Tests",
    icon: "🦋",
    description: "T3, T4, TSH and complete thyroid profile testing",
    category: "Thyroid Test",
  },
  {
    title: "Vitamin Tests",
    icon: "💊",
    description: "Vitamin D-3, B-12 deficiency analysis",
    category: "Vitamin Test",
  },
  {
    title: "Kidney Tests",
    icon: "⚗️",
    description: "Renal Function Test, Micro Albumin evaluation",
    category: "Kidney Test",
  },
  {
    title: "Urine Tests",
    icon: "🧫",
    description: "Routine Urine, Culture & Sensitivity tests",
    category: "Urine Test",
  },
  {
    title: "Infectious Disease Tests",
    icon: "🦠",
    description: "HIV, HBsAg viral infection screening",
    category: "Infectious Disease",
  },
  {
    title: "Inflammation Markers",
    icon: "🔬",
    description: "ESR, CRP inflammation testing",
    category: "Inflammation Marker",
  },
  {
    title: "Serology Tests",
    icon: "💉",
    description: "RA Factor and antibody testing",
    category: "Serology",
  },
  {
    title: "Allergy Tests",
    icon: "🌸",
    description: "IGE Immunoglobulin-E allergy testing",
    category: "Allergy Test",
  },
  {
    title: "Coagulation Tests",
    icon: "🩸",
    description: "PT INR blood clotting time evaluation",
    category: "Coagulation Test",
  },
  {
    title: "Hormone Tests",
    icon: "🧬",
    description: "FSH, LH, PRL women's health hormones",
    category: "Hormone Test",
  },
  {
    title: "Rheumatology",
    icon: "🦴",
    description: "Arthritis Profile and joint health markers",
    category: "Rheumatology",
  },
  {
    title: "Hearing Tests",
    icon: "👂",
    description: "Audiometry hearing ability analysis",
    category: "Hearing Test",
  },
];


  useEffect(() => {
    // fetchServices();
    // loadDummyData();
  }, []);

  


  const fetchServices = async () => {
    try {
      const response = await servicesAPI.getAll();
      setServices(response.data.data);
    } catch (error) {
      toast.error("Failed to load services");
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="services-page">

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Select from a range of top-quality healthcare services</p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="category-section">
        <div className="container">
          <div className="category-grid">
            {serviceCategories.map((item, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{item.icon}</div>
                <h3 style={{color:'#2e8b57'}}>{item.title}</h3>
                <p>{item.description}</p>
                <Link
                  to="/category-services"
                  state={{ selectedCategory: item.category }}
                  className="category-link"
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loaded Services List
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">All Available Services</h2>

          <div className="services-list">
            {services.map((service) => (
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
                </div>

                <Link
                  to="/appointments"
                  className="btn btn-primary"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
