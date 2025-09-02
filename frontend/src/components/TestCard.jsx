import React from "react";

const TestCard = ({ test }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-blue-800">{test.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{test.description}</p>
      <p className="text-blue-700 font-semibold mt-3">₹{test.price}</p>
    </div>
  );
};

export default TestCard;
