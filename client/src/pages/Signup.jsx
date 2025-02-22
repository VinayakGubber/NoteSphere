import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [profilePreviewImage, setProfilePreviewImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg" />

      <div className="relative z-10 w-full max-w-2xl rounded-xl bg-white bg-opacity-10 p-6 shadow-lg backdrop-blur-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Sign Up
        </h2>

        {!showEmailForm ? (
          <button
            onClick={() => setShowEmailForm(true)}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-white bg-opacity-20 px-4 py-2 text-white hover:bg-opacity-30"
          >
            <FaUserPlus />
            Sign up with Email
          </button>
        ) : (
          <form className="space-y-4">
            {/* Two-column layout for large screens */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="input-box"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-box"
                required
              />
              <input
                type="text"
                placeholder="Username"
                className="input-box"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="input-box"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="input-box"
                required
              />
              <input
                type="password"
                placeholder="Create a password"
                className="input-box"
                required
              />
            </div>

            <textarea
              placeholder="Short Bio"
              className="input-box"
              required
            ></textarea>

            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center">
              <div className="profile-preview">
                {profilePreviewImage === "" ? (
                  <p className="text-sm font-bold text-gray-300">Profile</p>
                ) : (
                  <img
                    src={profilePreviewImage}
                    alt="Profile Preview"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <label className="cursor-pointer text-sm font-semibold text-gray-300 hover:underline">
                Upload Profile Picture
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={(e) => {
                    setProfilePreviewImage(
                      URL.createObjectURL(e.target.files[0]),
                    );
                    setProfileImage(e.target.files[0]);
                  }}
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-2 text-white hover:bg-opacity-30"
            >
              Sign Up
            </button>
          </form>
        )}

        <p className="mt-5 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Glassmorphism & Input Styles */}
      <style>
        {`
          .input-box {
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            backdrop-filter: blur(10px);
            transition: 0.3s;
          }

          .input-box::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }

          .input-box:focus {
            border-color: white;
            outline: none;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }

          .profile-preview {
            margin-bottom: 10px;
            height: 100px;
            width: 100px;
            overflow: hidden;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
