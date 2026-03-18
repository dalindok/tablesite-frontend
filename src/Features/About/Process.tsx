import React from "react";
const processData = [
  {
    emoji: "🌐",
    step: "01",
    header: "Discover",
    description:
      "Search 400+ restaurants by city, cuisine, price range, or vibe. Real-time availability, always up to date.",
  },
  {
    emoji: "📅",
    step: "02",
    header: "Book",
    description:
      "Pick your date, time, and table in seconds. Instant confirmation — no phone calls, no waiting.",
  },
  {
    emoji: "📱",
    step: "03",
    header: "Enjoy",
    description:
      "Show your ref code at the door. Rate your experience after and help other diners discover great food.",
  },
];
const Process = () => {
  return (
    <div className="p-16 bg-gray-50">
      <div className="flex flex-col items-center gap-6">
        <p className="text-primary font-semibold text-md">Simple by Design</p>
        <p className="text-5xl font-bold">How TableSite works</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-12 mt-12">
        {processData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md w-80 hover:shadow-2xl transition-transform duration-200 hover:-translate-y-1 "
          >
            <div className="flex flex-row justify-between items-center">
              <div className="p-2 px-3 bg-light rounded-lg">
                <p className="text-2xl">{item.emoji}</p>
              </div>

              <p className="text-6xl font-bold text-gray-50">{item.step}</p>
            </div>

            <h3 className="text-xl font-bold  mb-2">{item.header}</h3>
            <p className="text-text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
