import React from "react";

const Header = () => {
  return (
    <div className="bg-linear-to-r from-primary from-30%  to-primary-light via-40% to-light 30% py-24">
      <div className=" flex flex-col items-center text-white">
        <div className="border rounded-2xl px-2 py-1 bg border-light uppercase">
          <p className="font-semibold text-xs">Our Story</p>
        </div>
        <div className="flex flex-col items-center text-5xl font-extrabold font-libre w-xl gap-2 my-8">
          <p>Cambodia deserves</p>
          <p>great dining.</p>
        </div>

        <p className="w-125 text-center text-lg">
          TableSite was born in Phnom Penh with a simple mission: make it
          effortless for anyone to discover, book, and enjoy the best
          restaurants across Cambodia.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <button className="bg-white text-primary rounded-xl px-6 py-2 text-md font-bold">
            Explore Restaurants
          </button>
          <button className="px-6 py-2 border border-light rounded-xl">
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
