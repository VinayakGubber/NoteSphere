import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="flex h-[80px] items-center justify-center">
      <div className="flex w-full max-w-[1550px] items-center justify-between">
        {/* Image Section */}
        <div className="flex h-[60px] w-[120px] items-center justify-center overflow-hidden ">
          <img src="/LOGO.png" alt="LOGO" className="" />
        </div>
        {/* Nav links */}
        <GiHamburgerMenu className="text-xl md:hidden" />
        {/* <ul className="flex items-center justify-center gap-4">
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="rounded-xl bg-blue-500 px-5 py-2 font-semibold">
            <Link to="/login">Login</Link>
          </li>
          <li className="rounded-xl bg-blue-500 px-5 py-2 font-semibold">
            <Link to="/signup">Signup</Link>
          </li>
        </ul> */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          {/* <Link to={"/login"}>
            <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold  hover:bg-blue-700">
              Signup
            </button>
          </Link> */}
          <Link to={"/search"}>
            <FiSearch />
          </Link>
          <Link to={"/upload"}>
            <FiUpload />
          </Link>
          <Link to={"/profile"}>
            <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold  hover:bg-blue-700">
              Profile
            </button>
          </Link>
          <Link to={"/logout"}>
            <button className="rounded-xl bg-red-600 px-5 py-2 font-semibold  hover:bg-red-700">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
