import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative flex h-heightWithoutNavbar flex-col items-center justify-start p-4">
      <div className="flex w-full items-center justify-center">
        <form className="w-full max-w-[700px] rounded-xl border border-gray-400 bg-gray-200 p-4 shadow-md">
          <div className="flex items-center justify-start">
            {/* Search Icon */}
            <FaSearch className="text-2xl text-gray-600" />
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search for notes"
              className="ml-3 w-full bg-gray-200 text-gray-800 placeholder-gray-600 outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Notes Display Grid (Fully Centered) */}
      <div className="mt-5 flex w-full justify-center">
        <div className="grid w-full max-w-[1200px] grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array(29) // More cards for better layout
            .fill(true)
            .map((_, i) => (
              <div
                key={i}
                className="bg-notesImage relative flex h-[250px] w-[220px] flex-col items-center justify-center 
                           rounded-lg p-5 shadow-lg"
              >
                {/* Tag */}
                <div className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  BCA sem 4
                </div>

                {/* Card Content */}
                <div className="relative flex flex-col items-center text-white">
                  {/* Title */}
                  <p className="text-center text-base font-semibold">
                    Introduction to C++
                  </p>

                  {/* Uploaded By */}
                  <p className="mt-1 text-center text-xs font-light text-gray-300">
                    Uploaded by <span className="font-semibold">John Doe</span>
                  </p>

                  {/* View Button */}
                  <button className="mt-4 w-full rounded-lg bg-white bg-opacity-20 px-5 py-2 text-sm font-medium text-white hover:bg-opacity-40">
                    View
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
