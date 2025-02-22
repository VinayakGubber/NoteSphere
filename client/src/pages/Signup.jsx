import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative flex h-heightWithoutNavbar flex-col items-center justify-start bg-notesImage bg-cover bg-center p-4">
      <div className="flex w-full items-center justify-center">
        <form className="w-full max-w-[700px] rounded-xl border border-black bg-[#374151] p-4">
          <div className="flex items-center justify-start">
            {/* Search Icon */}
            <FaSearch className="text-2xl text-white" />
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search for notes"
              className="ml-3 w-full bg-[#374151] text-white outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Notes Display Grid */}
      <div className="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array(8)
          .fill(true)
          .map((_, i) => (
            <div
              key={i}
              className="relative flex h-[200px] w-[160px] flex-col justify-between rounded-lg bg-notesImage bg-cover bg-center p-4 shadow-lg"
            >
              {/* Tag */}
              <div className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-2 py-1 text-xs font-bold text-white">
                BCA sem 4
              </div>

              {/* Title */}
              <p className="mt-8 text-center text-sm font-semibold text-gray-800">
                Introduction to C++
              </p>

              {/* View Button */}
              <button className="mt-auto w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                View
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
