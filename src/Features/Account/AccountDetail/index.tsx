import React from "react";
import { RiImageAiFill } from "react-icons/ri";
const mockUser = {
  img: "https://randomuser.me/api/portraits/men/75.jpg",
  fullname: "John Doe",
  gender: "male",
  email: "john.doe@example.com",
  phone: "+1234567890",
};

const AccountDetail = () => {
  return (
    <div>
      <p className="text-xl font-semibold mb-8">Welcome {mockUser.fullname}</p>
      <div className="flex flex-row  gap-24 my-4">
        <div className="flex flex-col gap-4">
          <div className="w-32 h-32 rounded-full overflow-hidden ">
            <img src={mockUser.img} alt="profile" />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <RiImageAiFill size={20} className="text-primary cursor-pointer" />
            <button className="text-sm text-gray-500 cursor-pointer">
              Update Image
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label
              className="w-28 text-md text-gray-500 shrink-0"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              id="fullname"
              value={mockUser.fullname}
              type="text"
              className="flex-1 w-lg  border border-gray-300 rounded-md py-2 px-2 text-md
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-4">
            <label
              className="w-28 text-md text-gray-500 shrink-0"
              htmlFor="gender"
            >
              Gender
            </label>
            {/* <input
              id="gender"
              type="text"
              className="flex-1 border border-gray-300 rounded-md py-2 px-16 text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            /> */}
            <select
              id="gender"
              value={mockUser.gender}
              className=" w-lg flex-1 border border-gray-300 rounded-md py-2 px-2 text-md
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label
              className="w-28 text-md text-gray-500 shrink-0"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              type="text"
              value={mockUser.phone}
              className="flex-1 w-lg  border border-gray-300 rounded-md py-2 px-2 text-md
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-4">
            <label
              className="w-28 text-md text-gray-500 shrink-0"
              htmlFor="phone"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={mockUser.email}
              className="flex-1 w-lg  border border-gray-300 rounded-md py-2 px-2 text-md
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button className="self-end mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
