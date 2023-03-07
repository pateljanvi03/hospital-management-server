const { default: mongoose, Schema } = require("mongoose");

const Hospital = new Schema ({
    name: { 
        type : String
    },
    address: { 
        type: String
    },
    branch: { 
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Hospital", Hospital);