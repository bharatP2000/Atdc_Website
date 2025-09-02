import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Acharya Tulsi Diagnostic Center. All Rights Reserved.</p>
        <p className="mt-2 text-sm">Designed with ❤️ for Humanity</p>
      </div>
    </footer>
  );
};

export default Footer;
