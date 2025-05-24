import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const registerUser = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userBio", userBio);
      formData.append("userEmail", userEmail);
      formData.append("userMobile", userMobile);
      formData.append("userName", userName);
      formData.append("userPassword", userPassword);
      formData.append("profileImage", profileImage);

      const result = await axios.post(
        "http://localhost:2002/auth/signup",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log("Data: ", result);
      alert("User Entry Saved in Database");
    } catch (error) {
      console.error("Failed to Register User: ", error);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black pb-3 pt-3">
      <div className="absolute  inset-0 bg-black bg-opacity-30 backdrop-blur-lg" />

      <form
        onSubmit={registerUser}
        className="relative z-10 w-full max-w-xl rounded-xl bg-white bg-opacity-10 p-6  shadow-lg backdrop-blur-lg"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Sign Up
        </h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="input-box"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-box"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <textarea
          rows="3"
          placeholder="Your bio"
          className="input-box mt-3"
          onChange={(e) => setUserBio(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="input-box mt-3"
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Mobile Number"
          className="input-box mt-3"
          onChange={(e) => setUserMobile(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Username"
          className="input-box mt-3"
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box mt-3"
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />

        {/* Profile Preview */}
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="mb-3 h-[120px] w-[120px] overflow-hidden rounded-full border border-white bg-gray-200">
            {profilePreviewImage ? (
              <img
                src={profilePreviewImage}
                alt="preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                Profile
              </div>
            )}
          </div>

          <input
            type="file"
            id="dropzone-file"
            accept="image/*"
            required
            onChange={(e) => {
              setProfilePreviewImage(URL.createObjectURL(e.target.files[0]));
              setProfileImage(e.target.files[0]);
            }}
            className="text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-2 text-white hover:bg-opacity-30"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </form>

      {/* Glassmorphism & Input Styles */}
      <style>
        {`
          .input-box {
            width: 100%;
            margin-top: 10px;
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
        `}
      </style>
    </div>
  );
};

export default Signup;
