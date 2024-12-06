import React from "react";

const SubscriptionContainer = () => {
  const plans = [
    {
      title: "Combo (1 Ltr Milk + Pure Buffalo Curd)",
      price: "₹95",
      description: "1 Ltr + 250gm, the best value!",
    },
    {
      title: "500ml Milk",
      price: "₹39",
      description: "Perfect for single servings.",
    },
    {
      title: "250gm Pure Buffalo Curd",
      price: "₹35",
      description: "Compact and convenient.",
    },
    {
      title: "1 Ltr Milk",
      price: "₹75",
      description: "Ideal for small families.",
    },
  ];

  return (
    <div className="bg-green-300/40 p-4 min-h-screen" id="plans">
      {/* Heading */}
      <div className="flex flex-col items-center w-full justify-center text-3xl font-bold text-slate-700 gap-1">
        <h1>SELECT A PLAN,</h1>
        <h1>SUITS YOUR FAMILY</h1>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center border border-green-400 hover:shadow-xl transition-shadow duration-300 w-full sm:w-64 lg:w-1/4 md:w-60"
          >
            <h2 className="text-2xl font-semibold text-green-600">
              {plan.title}
            </h2>
            <p className="text-lg text-slate-600 mt-2">{plan.description}</p>
            <p className="text-3xl font-bold text-green-700 mt-4">
              {plan.price}
            </p>
            <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionContainer;
