import Header from "@/Features/About/Header";
import Mission from "@/Features/About/Mission";
import OurValue from "@/Features/About/OurValue";
import Process from "@/Features/About/Process";
import Question from "@/Features/About/Question";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Mission />
      <OurValue />
      <Process />
      <Question />
    </div>
  );
};

export default page;
