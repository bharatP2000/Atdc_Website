import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { appointmentsAPI, servicesAPI } from '../services/api';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import './Appointment.css';

const Appointments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const [formData, setFormData] = useState({
    service: location.state?.selectedService?._id || '',
    appointmentDate: '',
    timeSlot: '',
    patientName: '',
    patientAge: '',
    patientGender: 'male',
    contactNumber: '',
    notes: ''
  });

  useEffect(() => {
    fetchServices();
    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const fetchServices = async () => {
    try {
      const response = await servicesAPI.getAll();
      setServices(response.data.data);
    } catch (error) {
      toast.error('Failed to load services');
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await appointmentsAPI.getAll();
      setAppointments(response.data.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('Please login to book an appointment');
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      const selectedService = services.find(s => s._id === formData.service);
      const appointmentData = {
        ...formData,
        totalAmount: selectedService?.price || 0
      };

      await appointmentsAPI.create(appointmentData);
      toast.success('Appointment booked successfully!');
      
      setFormData({
        service: '',
        appointmentDate: '',
        timeSlot: '',
        patientName: '',
        patientAge: '',
        patientGender: 'male',
        contactNumber: '',
        notes: ''
      });

      fetchAppointments();
      setShowForm(false);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        await appointmentsAPI.cancel(id);
        toast.success('Appointment cancelled successfully');
        fetchAppointments();
      } catch (error) {
        toast.error('Failed to cancel appointment');
      }
    }
  };

  const timeSlots = [
    '09:00-10:00',
    '10:00-11:00',
    '11:00-12:00',
    '12:00-13:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
    '17:00-18:00'
  ];

  return (
    <div className="appointments-page">
      <section className="page-header">
        <div className="container">
          <h1>Book Appointment</h1>
          <p>Schedule your diagnostic tests and health checkups</p>
        </div>
      </section>

      <section className="appointments-section">
        <div className="container">
          <div className="appointments-tabs">
            <button
              className={`tab-btn ${showForm ? 'active' : ''}`}
              onClick={() => setShowForm(true)}
            >
              Book New Appointment
            </button>
            {user && (
              <button
                className={`tab-btn ${!showForm ? 'active' : ''}`}
                onClick={() => setShowForm(false)}
              >
                My Appointments
              </button>
            )}
          </div>

          {showForm ? (
            <div className="appointment-form-container">
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Select Service *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service._id} value={service._id}>
                          {service.name} - ₹{service.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="appointmentDate">Appointment Date *</label>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeSlot">Time Slot *</label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="patientName">Patient Name *</label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter patient name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="patientAge">Patient Age *</label>
                    <input
                      type="number"
                      id="patientAge"
                      name="patientAge"
                      value={formData.patientAge}
                      onChange={handleChange}
                      placeholder="Enter age"
                      min="0"
                      max="150"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="patientGender">Gender *</label>
                    <select
                      id="patientGender"
                      name="patientGender"
                      value={formData.patientGender}
                      onChange={handleChange}
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number *</label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special requirements or medical conditions"
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Booking...' : 'Book Appointment'}
                </button>
              </form>
            </div>
          ) : (
            <div className="appointments-list">
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <div key={appointment._id} className="appointment-card">
                    <div className="appointment-header">
                      <h3>{appointment.service?.name}</h3>
                      <span className={`status-badge status-${appointment.status}`}>
                        {appointment.status}
                      </span>
                    </div>
                    <div className="appointment-details">
                      <p><strong>Patient:</strong> {appointment.patientName}</p>
                      <p><strong>Date:</strong> {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {appointment.timeSlot}</p>
                      <p><strong>Contact:</strong> {appointment.contactNumber}</p>
                      <p><strong>Amount:</strong> ₹{appointment.totalAmount}</p>
                      {appointment.notes && (
                        <p><strong>Notes:</strong> {appointment.notes}</p>
                      )}
                    </div>
                    {appointment.status === 'pending' && (
                      <button
                        onClick={() => handleCancel(appointment._id)}
                        className="btn btn-danger"
                      >
                        Cancel Appointment
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className="no-appointments">
                  <p>You don't have any appointments yet.</p>
                  <button onClick={() => setShowForm(true)} className="btn btn-primary">
                    Book Your First Appointment
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Appointments;