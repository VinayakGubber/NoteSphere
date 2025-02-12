const mongoose = require("mongoose");

const userSchema  = mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    userBio:{
        type:String,
        require:true,
    },
    userEmail:{
        type:String,
        require:true,
    },
    userMobile:{
        type:Number,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    userPassword:{
        type:String,
        require:true,
    },
    profileImage:{
        type:String,
        require:true,
    },
});

module.exports = mongoose.model("User",userSchema);