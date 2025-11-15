import React from "react";
import "./Doctors.css";
import { Link } from "react-router-dom";

const Doctors = () => {
  // Dummy doctor data (no API)
  const doctors = [
  {
    _id: "1",
    name: "Dr. Arihant Singhi",
    specialization: "Dental Surgeon",
    qualification: "BDS (Dental Surgeon), Certified Implantologist",
    fee: null,
    schedule: [
      "Monday: 2:00 PM – 4:00 PM",
      "Wednesday: 2:00 PM – 4:00 PM",
      "Friday: 2:00 PM – 4:00 PM",
    ],
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    _id: "2",
    name: "Dr. Twinkle Kothari",
    specialization: "Endodontist",
    qualification: "MDS (Endodontist)",
    fee: null,
    schedule: [
      "Tuesday: 3:00 PM – 5:00 PM",
      "Thursday: 3:00 PM – 5:00 PM",
      "Saturday: 3:00 PM – 5:00 PM",
    ],
    image: "https://www.w3schools.com/howto/img_avatar2.png",
  },
  {
    _id: "3",
    name: "Dr. Vijay Jain",
    specialization: "General Surgeon",
    qualification: "M.S. (General Surgery)",
    fee: null,
    schedule: ["Monday to Saturday: 7:00 PM"],
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    _id: "4",
    name: "Dr. Nikhil Sonthalia",
    specialization: "General Medicine",
    qualification: "M.D. (Medicine)",
    fee: null,
    schedule: [
      "Wednesday: 5:00 PM – 6:00 PM",
      "Saturday: 5:00 PM – 6:00 PM",
    ],
    image: "https://www.w3schools.com/howto/img_avatar2.png",
  },
  {
    _id: "5",
    name: "Dr. Karan Sancheti",
    specialization: "Dermatologist & Cosmetologist",
    qualification: "M.B.B.S, M.D. (Cal)",
    fee: null,
    schedule: [
      "Monday: 5:30 PM",
    ],
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    _id: "6",
    name: "Dr. D. N. Singh",
    specialization: "Homeopathy",
    qualification: "B.Sc (Bio), D.M.S (C.H.M.C)",
    fee: null,
    schedule: [
      "Monday: 3:00 PM – 5:00 PM",
      "Wednesday: 3:00 PM – 5:00 PM",
      "Friday: 3:00 PM – 5:00 PM",
    ],
    image: "https://www.w3schools.com/howto/img_avatar2.png",
  },
];

  return (
    <div className="doctors-page">

      {/* Header */}
      <section className="doctors-header">
        <h1>Our Doctors</h1>
        <p>Meet our experienced and highly qualified medical professionals.</p>
      </section>

      <div className="container">
        <div className="doctors-grid">

          {doctors.map((doctor) => (
            <div key={doctor._id} className="doctor-card">

              <div className="doctor-img-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
              </div>

              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="doctor-specialization">{doctor.specialization}</p>

                <p className="doctor-qual">{doctor.qualification}</p>

                <div className="doctor-schedule">
                  {doctor.schedule.map((slot, index) => (
                    <p key={index}>{slot}</p>
                  ))}
                </div>

                {/* <p className="doctor-fee">₹{doctor.fee}</p> */}

                {/* <Link
                  className="doctor-btn"
                  to="/appointments"
                  state={{ selectedDoctor: doctor }}
                >
                  Book Appointment
                </Link> */}
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Doctors;
