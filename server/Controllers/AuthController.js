const express = require("express");
const dotenv = require("dotenv");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("cloudinary").v2; // Use cloudinary.v2

dotenv.config();

const router = express.Router();

// Multer Storage (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Signup route
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

    // Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res
        .status(401)
        .json({ error: "User already exists with this email address" });
    }

    // Check if file is provided
    if (!req.file) {
      return res.status(400).json({ error: "Please upload a profile image" });
    }

    // Upload file to Cloudinary using upload_stream()
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(req.file.buffer); // Use file buffer, not req.file.path
    });

    console.log("Cloudinary Upload Result:", result);

    // Hash password
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(userPassword, saltRounds);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      userBio,
      userEmail,
      userMobile,
      userName,
      userPassword: encryptedPassword,
      profileImage: result.secure_url, // Save image URL from Cloudinary
    });

    await newUser.save();
    return res.status(200).json({
      status: "ok",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

//Login route
const login = async (req, res) => {
  try {
      const { userEmail, userPassword } = req.body;
      console.log(userEmail);

      const user = await User.findOne({ userEmail });

      if (user) {
          const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);
          if (passwordMatch) {
              return res.json(user);
          } else {
              return res.json({ status: "Error", getUser: false })
          }
      } else {
          return res.json({ status: "Error", getUser: false });
      }

  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = { signup,login };
