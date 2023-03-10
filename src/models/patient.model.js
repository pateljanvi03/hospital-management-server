const { default: mongoose, Schema } = require("mongoose");

const Patient = new Schema(
  {
    name: {
      type: String,
    },
    patientNo: {
      type: Number,
    },
    age: {
      type: Number,
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
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

module.exports = mongoose.model("Patient", Patient);
