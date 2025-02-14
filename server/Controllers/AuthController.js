const express = require("express");
const dotenv = require("dotenv");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const fs = require("fs"); // ✅ Required to delete local files after upload

dotenv.config();

const signup = async (req, res) => {
  try {
    const { firstName, lastName, userBio, userEmail, userMobile, userName, userPassword } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(401).json({ error: "User already exists with this email address" });
    }

    // Check if file is provided
    if (!req.file) {
      return res.status(400).json({ error: "Please upload a profile image" });
    }

    // ✅ Upload file to Cloudinary from disk storage
    const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "image" });

    // ✅ Delete the local file after successful upload
    fs.unlinkSync(req.file.path);

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
      profileImage: result.secure_url, // ✅ Store Cloudinary URL
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

// Login route (no changes)
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
              return res.json({ status: "Error", getUser: false });
          }
      } else {
          return res.json({ status: "Error", getUser: false });
      }
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = { signup, login };
