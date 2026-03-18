import React from "react";

const valueData = [
  {
    emoji: "❤️",
    header: "Guest First",
    description:
      "Every decision we make starts with one question: does this make the diner happier?",
  },
  {
    emoji: "🛡️",
    header: "Trust & Safety",
    description:
      "Verified restaurants, secure payments, and a support team that actually answers.",
  },
  {
    emoji: "⚡",
    header: "Speed & Ease",
    description:
      "From search to confirmation in under 60 seconds — because hunger waits for no one.",
  },
  {
    emoji: "🌍",
    header: "Local Love",
    description:
      "We celebrate Cambodia's rich food culture and champion independent restaurants.",
  },
];

const OurValue = () => {
  return (
    <div className="p-16 bg-dark ">
      <div className="flex flex-col items-center gap-6">
        <p className="text-primary font-semibold text-md">What We Stand For</p>
        <p className="text-5xl font-bold text-white">Our values</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-6 mt-12">
        {valueData.map((item, index) => (
          <div
            key={index}
            className="bg-black/30 p-6 rounded-2xl shadow-md w-60 h-70 border-text-muted border hover:border-primary-light transition-transform duration-200 hover:-translate-y-1 "
          >
            <p className="text-4xl mb-4">{item.emoji}</p>
            <h3 className="text-xl font-bold text-white mb-2">{item.header}</h3>
            <p className="text-text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValue;
