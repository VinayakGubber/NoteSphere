import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Handle Email Sign-In Form
  const handleEmailSignIn = (e) => {
    e.preventDefault();
    alert(`Signed in with Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg" />

      <div className="relative z-10 w-full max-w-md rounded-xl bg-white bg-opacity-10 p-6 shadow-lg backdrop-blur-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Login
        </h2>

        {/* Email Login */}
        {!showEmailForm ? (
          <button
            onClick={() => setShowEmailForm(true)}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-white bg-opacity-20 px-4 py-2 text-white hover:bg-opacity-30"
          >
            <FaEnvelope />
            Login with Email
          </button>
        ) : (
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-2 text-white hover:bg-opacity-30"
            >
              Login
            </button>
          </form>
        )}

        <p className="mt-5 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white hover:underline">
            Sign Up
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
        `}
      </style>
    </div>
  );
};

export default Login;
