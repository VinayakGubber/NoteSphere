import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUpload } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData } from "../Redux/slices/user-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    dispatch(removeUserData());
    navigate("/");
  };

  return (
    <header className="flex h-[80px] items-center justify-center shadow-md">
      <div className="flex w-full max-w-[1550px] items-center justify-between px-3">
        {/* Logo Section */}
        <div className="mx-2 flex h-[60px] w-[120px] items-center justify-center overflow-hidden">
          <Link to="/">
            <img src="/NoteSphereLogo.jpg" alt="LOGO" />
          </Link>
        </div>

        {/* Hamburger for mobile view */}
        <GiHamburgerMenu className="text-xl md:hidden" />

        {/* Navigation Section */}
        <div className="flex items-center justify-center gap-4">
          <div className="font-semibold">
            <Link to="/">Home</Link>
          </div>
          <div className="font-semibold">
            <Link to="/about">About</Link>
          </div>

          {/* Conditional Rendering Based on Authentication */}
          {isAuthenticated ? (
            <>
              <div>
                <Link to="/search">
                  <FiSearch className="text-xl" />
                </Link>
              </div>
              <div>
                <Link to="/upload">
                  <FiUpload className="text-xl" />
                </Link>
              </div>
              <Link
                to="/profile"
                className="mr-1 rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600"
              >
                Profile
              </Link>
              <div>
                <Link>
                  <button
                    className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to="/login">
                  <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold text-white">
                    Login
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/signup">
                  <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold text-white">
                    Signup
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
