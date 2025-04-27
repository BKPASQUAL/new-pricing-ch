import Image from "next/image";
import ItemsCard from "./components/Home/ItemsCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar Section */}
      <div className="w-full flex justify-center bg-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="w-full max-w-2xl p-2 sm:p-4 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-[#00aeff] p-2 sm:p-3 px-4 sm:px-5 rounded-lg cursor-pointer text-white text-sm sm:text-base whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
      
      {/* Product Grid Section */}
      <div className="p-2 sm:p-4 md:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
        {[...Array(16)].map((_, index) => (
          <ItemsCard key={index} />
        ))}
      </div>
    </div>
  );
}