import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");

  const user = useSelector((state) => state.user.userData);
  const username = user?.userName || "Unknown";

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:2002/notes/getFiles", {
        params: { title: searchQuery },
      });

      const data = res.data?.data || [];

      if (data.length > 0) {
        setSearchResults(data);
        setSearchStatus("found");
      } else {
        setSearchResults([]);
        setSearchStatus("not-found");
      }
    } catch (err) {
      console.error("Search error:", err);
      setSearchResults([]);
      setSearchStatus("not-found");
    }
  };

  const showPDF = (fileName) => {
    window.open(`http://localhost:2002/files/${fileName}`, "_blank", "noreferrer");
  };

  return (
    <div className="relative flex h-heightWithoutNavbar flex-col items-center justify-start p-4">
      {/* Search Bar */}
      <div className="flex w-full items-center justify-center">
        <form
          onSubmit={handleSearch}
          className="w-full max-w-[700px] rounded-xl border border-gray-400 bg-gray-200 p-4 shadow-md"
        >
          <div className="flex items-center justify-start">
            <FaSearch className="text-2xl text-gray-600" />
            <input
              type="text"
              placeholder="Search for notes"
              className="ml-3 w-full bg-gray-200 text-gray-800 placeholder-gray-600 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button
              type="submit"
              className="ml-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Notes Display Grid */}
      <div className="mt-5 flex w-full justify-center">
        <div className="grid w-full max-w-[1200px] grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {searchStatus === "found" &&
            searchResults.map((note) => (
              <div
                key={note._id}
                className="bg-notesImage relative flex h-[250px] w-[220px] flex-col items-center justify-center 
                           rounded-lg p-5 shadow-lg text-white"
              >
                <div className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {note.tags || "Note"}
                </div>
                <div className="relative flex flex-col items-center">
                  <p className="text-center text-base font-semibold">
                    {note.title || note.fileName}
                  </p>
                  <p className="mt-1 text-center text-xs font-light text-gray-300">
                    Uploaded by <span className="font-semibold">{username}</span>
                  </p>
                  <button
                    onClick={() => showPDF(note.files)}
                    className="mt-4 w-full rounded-lg bg-white bg-opacity-20 px-5 py-2 text-sm font-medium text-white hover:bg-opacity-40"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}

          {searchStatus === "not-found" && (
            <div className="col-span-full mt-4 text-center text-gray-600 dark:text-gray-400">
              No Notes Found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
