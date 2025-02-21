import React from "react";
import { RiShareForwardBoxFill } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center max-[750px]:flex-col lg:h-heightWithoutNavbar lg:flex-row">
      {/* Left Section - Profile (35%) */}
      <div className="flex w-full flex-col items-center justify-center py-4 max-lg:border-b max-lg:border-gray-400 lg:h-full lg:w-[35%] lg:border-r lg:border-gray-400">
        <div className="grid h-[200px] w-[200px] place-content-center overflow-hidden rounded-full bg-gray-400 text-2xl font-black">
          <img src="" alt="userprofile" className="" />
        </div>

        {/* Profile Details */}
        <div className="text-center">
          <h2 className="text-2xl font-black">Vinayak Gubber</h2>
          <p className="mt-1">Vinayak@123</p>
          <p className="mt-1 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            repudiandae!
          </p>
        </div>

        {/* Upload & File Count */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="grid h-[80px] w-[100px] place-content-center">
            <p className="text-center text-[12px] font-bold">No. of Uploads:</p>
            <p className="text-center text-5xl font-black">2</p>
          </div>
          <span className="h-[60px] w-[1px] bg-gray-400" />
          <div className="grid h-[80px] w-[100px] place-content-center">
            <p className="text-center text-[12px] font-bold">No. of Files:</p>
            <p className="text-center text-5xl font-black">4</p>
          </div>
        </div>
      </div>

      {/* Right Section - File List */}
      <div className="w-full px-5 py-4 max-[750px]:mt-5 max-[750px]:w-full lg:w-[65%]">
        <h1 className="mb-3 text-xl font-black">My Documents:</h1>
        {/* Responsive Grid Layout for File List */}
        <div className="grid gap-3 max-[1440px]:place-items-center max-[1022px]:grid-cols-2 max-[750px]:grid-cols-2 max-[500px]:grid-cols-1 lg:grid-cols-2">
          {Array(8)
            .fill(true)
            .map((_, i) => (
              <div
                key={i}
                className="flex w-full max-w-[300px] items-center justify-between rounded-md border border-black px-4 py-2 text-black"
              >
                <p className="">filename</p>
                <RiShareForwardBoxFill />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
