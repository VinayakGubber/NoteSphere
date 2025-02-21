import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex h-heightWithoutNavbar flex-col items-center justify-start p-4">
      <div className="flex w-full items-center justify-center">
        <form className="w-full max-w-[700px] rounded-xl border border-black bg-[#374151] p-4">
          <div className="  flex items-center justify-start">
            {/* Search Logo */}
            <FaSearch className="text-2xl text-white " />
            {/* Input  */}
            <input
              type="text"
              placeholder="Search for notes"
              className=" ml-3  w-full   bg-[#374151]"
            />
            <button
              type="submit"
              className=" bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* Documents */}
      <div className="mt-5 grid  w-full grid-cols-1 gap-5 border border-amber-500 sm:grid-cols-2 lg:grid-cols-3">
        {/* Make card afterwards */}
        {/* <div className="flex w-[300px] items-center  justify-center justify-between rounded-md border border-black bg-[#374151] px-4  py-2 text-white">
          <p className="">
            <span>File Name : </span>
            <span>Sem-1</span>
          </p>
          <button className="rounded-xl bg-blue-600 px-4 py-1 font-semibold  hover:bg-blue-700">
            View
          </button>
        </div> */}
        {Array(8)
          .fill(true)
          .map((item, i) => (
            <div
              key={i}
              className="mt-3 flex w-[300px] items-center  justify-center justify-between rounded-md border border-black bg-[#374151] px-4  py-2 text-white"
            >
              <p className="">
                <span>File Name : </span>
                <span>Sem-1</span>
              </p>
              <button className="rounded-xl bg-blue-600 px-4 py-1 font-semibold  hover:bg-blue-700">
                View
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
