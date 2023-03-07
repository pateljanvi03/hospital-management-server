const Patient = require("../models/patient.model");

exports.list = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.get = async (req, res) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.id });
    res.status(200).json(patient);
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.create = async (req, res) => {
  try {
    await Patient.create(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.update = async (req, res) => {
  try {
    await Patient.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.erase = async (req, res) => {
  try {
    await Patient.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};
