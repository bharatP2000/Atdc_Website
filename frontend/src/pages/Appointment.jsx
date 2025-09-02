import React from "react";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Book Your Appointment
      </h2>
      <AppointmentForm />
    </section>
  );
};

export default Appointment;
