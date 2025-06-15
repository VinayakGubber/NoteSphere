const express = require("express");
const dotenv = require("dotenv");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

dotenv.config();

const router = express.Router();

// Memory storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ✅ SIGNUP
const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userBio,
      userEmail,
      userMobile,
      userName,
      userPassword,
    } = req.body;

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User already exists with this email." });
    }

    // ✅ Check for profile image
    if (!req.file) {
      return res.status(400).json({ error: "No profile image provided." });
    }

    // ✅ Upload image to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: "image", folder: "profileImages" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(500).json({ error: "Image upload failed." });
        }

        // ✅ Encrypt password
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(userPassword, salt);

        // ✅ Create user
        const newUser = new User({
          firstName,
          lastName,
          userBio,
          userEmail,
          userMobile,
          userName,
          userPassword: encryptedPassword,
          profileImage: result.secure_url,
        });

        await newUser.save();

        return res.status(201).json({
          status: "Success",
          user: {
            id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            userEmail: newUser.userEmail,
            profileImage: newUser.profileImage,
          },
        });
      }
    );

    // Write file buffer to stream
    const stream = result;
    stream.end(req.file.buffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Signup failed" });
  }
};

// ✅ LOGIN
const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const user = await User.findOne({ userEmail });
    if (!user) {
      return res
        .status(401)
        .json({ status: "Error", message: "User not found." });
    }

    const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid credentials." });
    }

    // ✅ Optionally generate a token here if using JWT
    return res.status(200).json({
      status: "Success",
      user: {
        id: user._id,
        userEmail: user.userEmail,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed." });
  }
};

module.exports = { signup, login };
