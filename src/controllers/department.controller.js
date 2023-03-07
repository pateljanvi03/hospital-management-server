const Department = require("../models/department.model");

exports.list = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json({ departments });
    } catch (err) {
        res.status(400).json({ message: err?.message });
    }
};

exports.get = async (req, res) => {
    try {
        const department = await Department.findOne({ _id: req.params.id });
        res.status(200).json(department);
    } catch (err) {
        res.status(400).json({ message: err?.message });
    }
};

exports.create = async (req, res) => {
    try {
        await Department.create(req.body);
        res.status(200).json({success: true});
    } catch (err) {
        res.status(400).json({ message: err?.message });
    }
};

exports.update = async (req, res) => {
    try {
        await Department.updateOne({_id: req.params.id}, req.body);
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ message: err?.message });
    }
};

exports.erase = async (req, res) => {
    try {
        await Department.deleteOne({_id: req.params.id});
        res.status(200).json({ success: true });
    } catch(err) {
        res.status(400).json({ message: err?.message });
    }
};
