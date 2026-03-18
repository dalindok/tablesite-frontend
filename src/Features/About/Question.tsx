"use client";
import React, { useState } from "react";

const questionData = [
  {
    question: "Is TableSite free to use?",
    answer:
      "Yes! Reservations are completely free for diners. We earn a small commission from partner restaurants, never from you.",
  },
  {
    question: "How do I cancel a reservation?",
    answer:
      "Open your profile, find the booking, and click 'Cancel'. Most restaurants allow free cancellation up to 2 hours before your booking time.",
  },
  {
    question: "Can I book for a large group?",
    answer:
      "Absolutely. Many restaurants offer private dining rooms and group packages. Select your party size when searching and we'll show matching tables.",
  },
  {
    question: "What if I have special requests?",
    answer:
      "You can add special requests (like dietary needs or celebrations) when booking. Restaurants will see these notes and do their best to accommodate.",
  },
];
const Question = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="p-16 bg-light">
      <div className="flex flex-col items-center gap-6">
        <p className="text-primary font-semibold text-md">Got Questions?</p>
        <p className="text-5xl font-bold">Frequently asked</p>
        <div className="flex flex-col gap-4 mt-2 ">
          {questionData.map((item, index) => (
            <div
              key={index}
              className="w-3xl border border-text-muted rounded-lg p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3 pt-3 border-t">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
