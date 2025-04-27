import Image from "next/image";
import ItemsCard from "./components/Home/ItemsCard";

export default function Home() {
  return (
    <div>
      {/* Search Bar Section */}
      <div className="w-full flex justify-center bg-gray-100">
        <div className="w-full max-w-2xl p-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-[#00aeff] p-3 px-5 rounded-lg cursor-pointer text-white">
            Search
          </button>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </div>
    </div>
  );
}