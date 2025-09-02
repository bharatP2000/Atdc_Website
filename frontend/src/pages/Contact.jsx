import React, { useState } from "react";
import axios from "../api/contactApi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/contact", formData);
      setMsg("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setMsg("Error submitting the form.");
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-6 rounded-lg">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          Send Message
        </button>
      </form>
      {msg && <p className="mt-4 text-center">{msg}</p>}
    </section>
  );
};

export default Contact;
