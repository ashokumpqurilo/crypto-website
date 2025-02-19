import React from "react";
import Heading from "../common/Heading";

const PricingCards = () => {
  const plans = [
    {
      title: "Essential",
      description: "For solo entrepreneur",
      price: "$250",
    },
    {
      title: "Pro",
      description: "For small teams",
      price: "$500",
    },
    {
      title: "Enterprise",
      description: "For large businesses",
      price: "$1000",
    },
  ];

  return (
    <div id="pricing" className="py-12 px-6">
      <Heading title="Pricing" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:h-[400px]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-600 p-8 flex flex-col justify-between rounded-lg text-white bg-black bg-opacity-10 shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            <div className="text-center">
              <h3 className="text-green-400 text-xl font-semibold">{plan.title}</h3>
              <p className="text-gray-300 mt-2">{plan.description}</p>
              <p className="text-4xl font-bold mt-4">{plan.price}</p>
            </div>

            <button className="mt-6 w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-300 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
