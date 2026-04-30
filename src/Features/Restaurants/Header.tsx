import React from "react";

const Header = () => {
  return (
    <div>
      <div className="text-3xl flex flex-row gap-2 mb-2 font-semibold">
        <p className="text-white">Restaurants in </p>
        <p className="font-libre text-primary">Phnom Penh</p>
      </div>
      <p className="text-text-muted">
        Discover and reserve tables at 400+ partner restaurants
      </p>
      <div className="mt-16 flex flex-row gap-4">
        <input
          type="text"
          placeholder="Search Restaurant or cuisine..."
          className="w-md border border-gray-300   rounded-lg px-6 py-2.5 text-sm  bg-gray-100  focus:border-primary"
        />
        {/* <select className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white">
          <option>Phnom Penh</option>
          <option>Siem Reap</option>
          <option>Battambang</option>
        </select>
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white"
        />
        <select className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select> */}
        <button className="bg-primary text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 whitespace-nowrap cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
