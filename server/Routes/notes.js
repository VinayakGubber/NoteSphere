const express = require ("express");
const router = express.Router();
const NotesController = require ("../Controllers/NotesController");
const multer = require("multer");


// Multer Storage (Keep Memory Storage)
//
// (Different from him check afterwards) 
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });