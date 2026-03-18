"use client";
import React, { useState } from "react";
import Tabs from "./Tab";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import ReviewSection from "./ReviewSection";

const RestaurantDetail = () => {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "About" && <AboutSection />}
      {activeTab === "Menu" && <MenuSection />}
      {/* {activeTab === "Reviews" && <ReviewSection />} */}
    </div>
  );
};

export default RestaurantDetail;
