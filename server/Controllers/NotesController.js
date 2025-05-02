const express = require("express");
const dotenv = require("dotenv");
const Notes = require("../Models/Notes");
const multer = require("multer");
const path = require("path");

dotenv.config();

const storage = multer.memoryStorage();
var upload = multer({ storage: storage });

//Upload Note
const uploadNote = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // ✅ Debugging: Check if userId exists

    const { fileName, description, tags, userId } = req.body;

    // ✅ Check if userId exists in request
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // ✅ Ensure a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // ✅ Save note in MongoDB
    const newFile = new Notes({
      fileName,
      fileDescription: description,
      tags: tags ? tags.split(",") : [], // Convert string tags to array
      files: req.file.path, // ✅ Store file path
      uploadedBy: userId,
    });

    await newFile.save();
    res.json({ status: "ok", message: "File uploaded successfully" });
  } catch (error) {
    console.log("Error in uploadNote:", error);
    res.status(400).json({ error: error.message });
  }
};

//Get Note
const getNote = async (req, res) => {
  try {
    const { title, tag } = req.query;

    if (title) {
      query.fileName = {
        $regex: title,
        $options: "i",
      };
    }
    if (tag) {
      query.tag = {
        $regex: tags,
        $options: "i",
      };
    }
    const data = await Notes.find(query);
    res.send({ data: data });
  } catch (error) {
    console.log(error);
  }
};

//Get Note By Id
const getNoteById = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);

    await Notes.find({
      uploadedBy: userId,
    }).then((data) => {
      res.send({ data: data });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadNote, getNote, getNoteById };
