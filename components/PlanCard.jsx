import React from "react";

const PlanCard = ({ title, description, price }) => {
  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg">
      <h4 className="text-2xl font-semibold text-green-600">{title}</h4>
      <p className="mt-2 text-gray-700">{description}</p>
      <p className="mt-4 text-2xl font-bold text-gray-800">₹{price}</p>
    </div>
  );
};

export default PlanCard;
