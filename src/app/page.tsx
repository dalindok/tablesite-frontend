import Banner from "@/Features/Home/Banner";
import Process from "@/Features/Home/Process";
import TopRestaurants from "@/Features/Home/TopRestaurants";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <div className="px-16 py-20  bg-linear-to-r from-white from-60%  to-orange-50 via-40%">
          {" "}
          <Banner />
        </div>

        <div className="mt-12 px-16 ">
          {/* <p className=" text-xl mb-4">Poppular Destination</p> */}
          <Process />
        </div>
        <div className=" bg-gray-100 mt-12">
          <div className="px-16 py-12">
            <TopRestaurants />
          </div>
        </div>
      </div>
    </>
  );
}
