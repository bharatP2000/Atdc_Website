import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-blue-100 py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        Affordable & Reliable Diagnostics
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Book health packages and tests with ease. Your health is our priority.
      </p>
      <Link
        to="/appointment"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Book Appointment
      </Link>
    </section>
  );
};

export default HeroSection;
