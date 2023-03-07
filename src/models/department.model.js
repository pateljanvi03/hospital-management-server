const { default: mongoose, Schema } = require("mongoose");

const Department = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", Department);
