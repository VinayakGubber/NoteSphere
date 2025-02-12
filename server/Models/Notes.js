const mongoose = require("mongoose");

const notesSchema  = mongoose.Schema({
    fileName:{
        type:String,
        require:true,
    },
    fileDescription:{
        type:String,
        require:true,
    },
    tags:{
        type:String,
        require:true,
    },
    files:{
        type:String,
        require:true,
    },
    uploadedBy:{
        type:mongoose.Schema.Types.objectId,
        ref:'User',
        require:true,
    },
});

module.exports = mongoose.model("Notes",notesSchema);