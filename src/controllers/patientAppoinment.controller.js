const PatientAppintment = require("../models/patientAppoinment.model");

exports.list = async (req, res) => {
  try {
    const patients = await PatientAppintment.find().populate('hospital', 'name').populate('doctor', 'name').populate('patient', 'name');
    res.status(200).json({ patients });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.get = async (req, res) => {
  try {
    const patient = await PatientAppintment.findOne({ _id: req.params.id });
    res.status(200).json(patient);
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.create = async (req, res) => {
  try {
    await PatientAppintment.create(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.update = async (req, res) => {
  try {
    await PatientAppintment.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.erase = async (req, res) => {
  try {
    await PatientAppintment.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};
