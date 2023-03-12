const { default: mongoose, Schema } = require("mongoose");

const User = new Schema ({
    name: {
      type: String
    },
    userName: {
      type: String
    },
    password: {
      type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("User", User);
