"use client";
import React, { useState } from "react";
import Tabs from "./Tab";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import ReviewSection from "./ReviewSection";
import ImageList from "./ImageList";

interface DetailHeaderProps {
  detail: RestaurantDetail.RetaurantData | undefined;
}
const RestaurantDetail = ({ detail }: DetailHeaderProps) => {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "About" && <AboutSection detail={detail} />}
      {activeTab === "Menu" && <MenuSection data={detail} />}
      {activeTab === "Photos" && <ImageList data={detail} />}
    </div>
  );
};

export default RestaurantDetail;
