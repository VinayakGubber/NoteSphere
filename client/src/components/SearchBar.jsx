import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex h-heightWithoutNavbar flex-col items-center justify-start p-4">
      {/* Search Bar */}
      <div className="flex w-full items-center justify-center">
        <form className="flex w-full max-w-[700px] items-center rounded-xl border border-gray-700 bg-[#1f2937] p-4 shadow-lg">
          <FaSearch className="text-2xl text-white" />
          <input
            type="text"
            placeholder="Search for notes"
            className="ml-3 w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="ml-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* Notes Grid */}
      <div className="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array(8)
          .fill(true)
          .map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-700 bg-[#1f2937] p-4 shadow-md transition hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-bold text-white">
                Note Title {i + 1}
              </h3>
              <p className="text-sm text-gray-400">
                This is a short description of the note. Click below to view
                more details.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Uploaded by: User{i + 1}
                </span>
                <button className="rounded-lg bg-blue-600 px-4 py-1 text-sm font-semibold text-white hover:bg-blue-700">
                  View
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
