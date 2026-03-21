import { sideBarMenu } from "@/utils/route-utils";
import Image from "next/image";
import React from "react";
const SideBarItems = () => {
  return (
    <div>
      {sideBarMenu.map((item) => (
        <div
          key={item.id}
          className="flex flex-row gap-4 items-center p-4 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <div className="text-primary">
            {/* <img src={item.icon} alt={item.name} width={24} height={24} /> */}
            <Image src={item.icon} alt={item.name} width={24} height={24} />
          </div>
          <p className="text-gray-700">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SideBarItems;
