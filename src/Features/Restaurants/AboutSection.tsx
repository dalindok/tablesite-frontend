import InfoCard from "@/components/Card/InfoCard";
import React from "react";

const AboutSection = () => {
  return (
    <div>
      {/* <Tabs /> */}

      <p className="mt-6 text-text-muted">
        A beloved neighborhood Italian restaurant bringing the warmth and
        flavors of Rome to Phnom Penh. Our wood-fired oven produces authentic
        Neapolitan pizzas, while our handmade pasta dishes use only the finest
        imported Italian ingredients.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <InfoCard
          title="Opening Hours"
          value="Mon–Fri: 11am–10pm | Sat–Sun: 10am–11pm"
        />
        <InfoCard title="Avg. Meal Time" value="1 hour 30 minutes" />
        <InfoCard title="Min. Party Size" value="1 Guest" />
        <InfoCard title="Max. Party Size" value="20 Guests" />
        <InfoCard title="Dress Code" value="Smart Casual" />
        <InfoCard title="Parking" value="Valet available" />
      </div>

      {/* <Amenities /> */}
    </div>
  );
};

export default AboutSection;
