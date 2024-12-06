import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-100 to-green-50 text-center p-10">
      <h2 className="text-4xl font-bold text-green-700">
        Exclusively for Government Employees
      </h2>
      <hr className="border-green-400 border-2 mt-4 mb-1" />
      <p className="mt-4 text-[22px] font-md text-gray-700 max-w-2xl mx-auto">
        Only 30 spots available for individuals who prioritize their health and
        well-being. Remember,
        <span className="font-semibold text-green-700">
          Health is not an expense it is an investment in your future.
        </span>
      </p>
      <p className="mt-4 text-xl text-gray-600 font-md italic max-w-2xl mx-auto">
        “Join a community that starts each morning with purity and care.
        Together, we embrace a healthier tomorrow.”
      </p>
      <button className="mt-8 bg-green-100 text-xl font-bold text-green-600 px-8 py-4 rounded-sm ">
        Join the Exclusive 30 Now
      </button>
    </section>
  );
};

export default Hero;
