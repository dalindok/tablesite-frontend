import FilledButton from "@/components/Button/FilledButton";
import OutlinedButton from "@/components/Button/OutlinedButton";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
const Banner = () => {
  return (
    <div className=" w-full  rounded-3xl ">
      {/* Text */}
      <div className=" ">
        <div className="font-bold font-libre">
          <p className="text-5xl ">Find & Reserve the</p>
          <div className="flex flex-row gap-4 mt-4">
            <p className="text-5xl text-primary">Perfect Table</p>
            <p className="text-5xl ">Tonight</p>
          </div>
        </div>

        <p className="text-lg w-125 mt-8 text-secondary">
          Discover the best restaurants across the city, check real-time
          availability, and book your table in under a minute — completely free.
        </p>
        <div className="flex flex-row gap-2 mt-8">
          <Link href="/">
            <FilledButton label="Find a Table" />
          </Link>
          <Link href="/restaurant">
            <OutlinedButton label="Browse Restaurants" />
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div className="mt-12">
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
