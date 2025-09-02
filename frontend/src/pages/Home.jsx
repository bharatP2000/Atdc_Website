import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg">Modern Labs</h3>
            <p className="text-gray-600">Equipped with advanced diagnostic tools.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg">Expert Doctors</h3>
            <p className="text-gray-600">Experienced professionals for accurate results.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg">Affordable Care</h3>
            <p className="text-gray-600">Low-cost packages for everyone in need.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
