import InfoCard from "@/components/Card/InfoCard";
import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
interface DetailHeaderProps {
  detail: RestaurantDetail.RetaurantData | undefined;
}
const AboutSection = ({ detail }: DetailHeaderProps) => {
  return (
    <div>
      {/* <Tabs /> */}

      <p className="mt-6 text-text-muted">{detail?.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <InfoCard
          title="Opening Hours"
          value={detail ? `${detail.operating_hours?.[0]?.open_time}` : "N/A"}
        />
        <InfoCard
          title="Closing Hours"
          value={detail ? `${detail.operating_hours?.[0]?.close_time}` : "N/A"}
        />
        {/* <InfoCard title="Avg. Meal Time" value={detail ? `${detail.policies.}` : "N/A"} /> */}
        <InfoCard
          title="Min. Party Size"
          value={detail ? `${detail.min_capacity}` : "N/A"}
        />
        <InfoCard
          title="Max. Party Size"
          value={detail ? `${detail.max_capacity}` : "N/A"}
        />
        {/* <InfoCard title="Dress Code" value={detail ? `${detail}` : "N/A"} />  */}
        {/* <InfoCard title="Parking" value={detail ? `${detail.parking}` : "N/A"} /> */}
      </div>
      <div className="mt-6">
        <div className="flex flex-row gap-1 items-center">
          <MdOutlinePhone className="inline-block text-2xl mr-2" size={20} />
          <p className="">Phone:</p>
          <span className="font-light ">{detail?.phone}</span>
        </div>
        <div className="mt-2 flex flex-row gap-1 items-center">
          <HiOutlineMailOpen className="inline-block text-2xl mr-2" size={20} />
          <p>Email:</p>
          <span className="font-light text-primary">{detail?.email}</span>
        </div>
        <div className="mt-2 flex flex-row gap-1 items-center">
          <CgWebsite className="inline-block text-2xl mr-2" size={20} />
          <p>Website:</p>
          <span className="underline font-light text-primary">
            {detail?.website}
          </span>
        </div>
      </div>

      {/* <Amenities /> */}
    </div>
  );
};

export default AboutSection;
