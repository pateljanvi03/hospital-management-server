const Hospital = require("../models/hospital.model");

exports.list = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.get = async (req, res) => {
  try {
    const hospital = await Hospital.findOne({ _id: req.params.id });
    res.status(200).json(hospital);
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.create = async (req, res) => {
  try {
    await Hospital.create(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.update = async (req, res) => {
  try {
    await Hospital.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.erase = async (req, res) => {
  try {
    await Hospital.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};
