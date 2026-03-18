import { ImSearch } from "react-icons/im";
import FilledButton from "./Button/FilledButton";
function Divider() {
  return <div className="w-px h-10 bg-gray-200" />;
}

export default function SearchBar() {
  return (
    // <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl">
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl px-6 py-6 gap-6 flex items-center">
      <div>
        {/* Title */}
        <h2 className="text-lg font-bold mb-4">
          🔍 Search Available <span className="text-primary">Tables</span>
        </h2>

        {/* Fields */}
        <div className="flex flex-row gap-3">
          {/* Restaurant or Cuisine */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Restaurant or Cuisine
            </label>
            <input
              type="text"
              placeholder="Italian, Sushi, Burger..."
              className="w-md border border-gray-300  bg-gray-100 rounded-lg px-6 py-2.5 text-sm outline-none placeholder:text-gray-400  focus:border-primary focus:bg-white"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Location
            </label>
            <select className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white">
              <option>Phnom Penh</option>
              <option>Siem Reap</option>
              <option>Battambang</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Date
            </label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Guests
            </label>
            <select className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="mt-6">
            <button className="bg-primary text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 whitespace-nowrap cursor-pointer">
              Search →
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
    // </div>
  );
}
