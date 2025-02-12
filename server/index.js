const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth"); //provides with the route of auth...

const app = express();
const PORT = 7088;

dotenv.config();
app.use(cors()); 
app.use(bodyParser.json());


//Checks the connection of MongoDb
try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB!");
} catch(error) {
    console.log(error);//
}

app.get("/",(req,res)=>{
    res.send("Server is running");
});

app.use("/auth",authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

