// const express = require("express");
// const router = express.Router();
// const authController = require("../Controllers/AuthController");
// const multer = require("multer");
// const dotenv = require("dotenv");
// const cloudinary = require("cloudinary").v2;

// dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// // Multer Storage (Keep Memory Storage)
// //
// // (Different from him check afterwards) 
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// // 
// //

// // Signup Route
// router.post("/signup", upload.single("profileImage"), authController.signup);

// // Login Route (Not Implemented Yet)
// router.post("/login", authController.login);

// module.exports = router;


const express = require("express");
const router = express.Router();
const authController = require("../Controllers/AuthController");
const multer = require("multer");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const path = require("path");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images"); // Save locally in 'images' folder
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

// Signup Route
router.post("/signup", upload.single("profileImage"), authController.signup);

// Login Route
router.post("/login", authController.login);

module.exports = router;