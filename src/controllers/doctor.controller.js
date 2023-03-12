const Doctor = require("../models/doctor.model");
exports.list = async (req, res) => {
  try {
    const doctors = await Doctor.find()
      .populate("hospital", "name")
      .populate("department", "name");
    res.status(200).json({ doctors });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err?.message });
  }
};

exports.get = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.params.id });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.create = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.update = async (req, res) => {
  try {
    const doctor = await Doctor.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.erase = async (req, res) => {
  try {
    const doctor = await Doctor.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};
