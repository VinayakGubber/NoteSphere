const express = require("express");
const router = express.Router();
const NotesController = require("../Controllers/NotesController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer Storage (Keep Memory Storage)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = "./files";
    cb(null, destinationPath); // Save locally in 'images' folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), NotesController.uploadNote);
router.get("/getFiles",NotesController.getNote);
router.get("/getFiles/:id",NotesController.getNoteById);

module.exports = router;
