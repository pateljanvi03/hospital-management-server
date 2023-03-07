const { default: mongoose, Schema } = require("mongoose");

const Doctor = new Schema(
  {
    name: {
      type: String,
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      require: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      require: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", Doctor);
