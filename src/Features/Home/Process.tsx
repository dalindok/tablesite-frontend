import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const steps = [
  {
    id: 1,
    title: "Search",
    description:
      "Browse hundreds of restaurants by cuisine, location, or occasion.",
    emoji: null,
  },
  {
    id: 2,
    title: "Choose a Table",
    description:
      "Pick your date, time, and party size. See real-time availability.",
    emoji: null,
  },
  {
    id: 3,
    title: "Confirm",
    description:
      "Enter your details and confirm your reservation instantly, free.",
    emoji: null,
  },
  {
    id: 4,
    title: "Enjoy!",
    description: "Arrive and enjoy a wonderful dining experience.",
    emoji: "🎉",
  },
];
const Process = () => {
  return (
    <div>
      <p className="text-md font-semibold text-primary">Simple Process</p>
      <div className="flex flex-row gap-2 font-semibold  text-4xl mt-6">
        <p>How</p>
        <p className="font-libre text-primary">TableSite</p>
        <p>Works</p>
      </div>

      <p className="text-gray-500 mt-6 w-120">
        Book a table at any partner restaurant in just a few clicks. No phone
        calls needed.
      </p>
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 mt-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-start gap-3 md:gap-4 w-full md:w-auto"
          >
            {/* Step Card */}
            <div className="bg-gray-100 rounded-2xl p-6 flex-1 md:w-72 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-light">
              {/* Step Number Badge */}
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg mb-4">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-lg mb-2">
                {step.title}
                {step.emoji && <span className="ml-1">{step.emoji}</span>}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow Connector (hidden after last step) */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center mt-8 text-gray-400">
                <div className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                  <IoIosArrowRoundForward size={14} className="text-primary" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
