import React from "react";

const Mission = () => {
  return (
    <div className="flex flex-row p-16 bg-gray-50 items-center justify-between">
      <div className="flex flex-col gap-6 ">
        <p className="text-primary font-semibold text-md">Our Mission</p>
        <p className="text-5xl font-bold w-150">
          Bridging diners and restaurants through seamless technology
        </p>
        <p className="text-text-muted w-100">
          We started DinEasy after experiencing firsthand how frustrating it was
          to call restaurant after restaurant — only to get a busy line or no
          answer at all. There had to be a better way.
        </p>
        <p className="text-text-muted w-100">
          Today we partner with over 400 restaurants across Cambodia, giving
          diners instant access to real-time availability and giving owners a
          powerful dashboard to grow their business.
        </p>
      </div>
      <div className="w-96 mr-16">
        <img src="/assets/chairs-dinner.svg" alt="Mission" />
      </div>
    </div>
  );
};

export default Mission;
