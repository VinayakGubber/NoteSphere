import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative flex h-full items-center justify-center bg-unsplashBgImage bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative z-10 w-full max-w-[860px] text-center text-white">
        <h1 className="text-4xl font-black">Note Sphere</h1>
        <p className="mt-5 text-sm font-light md:text-xl">
          Your all-in-one platform for accessing, uploading, and sharing notes
          effortlessly! Whether you're a student, teacher, or professional,
          NoteSphere keeps your knowledge organized and easily accessible
          anytime, anywhere. Stay productive, collaborate seamlessly, and never
          lose an important note again!
        </p>
        <div className="mt-5 text-sm">
          {/* <Link to="/search">
            <button className=" rounded-xl bg-white px-7 py-4 font-black font-semibold text-blue-500 ">
              Get Started
            </button>
          </Link> */}
          <div className="flex items-center justify-center gap-5">
            <Link to="/login">
              <button className="rounded-xl bg-white px-7 py-4 font-black font-semibold text-blue-500 ">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className=" rounded-xl bg-white px-7 py-4 font-black font-semibold text-blue-500 ">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
