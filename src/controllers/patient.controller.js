const { group } = require("console");
const Patient = require("../models/patient.model");
const dayjs = require("dayjs");
const { format } = require("path");
const { patient } = require("../config/validationSchema");
const { date } = require("joi");

exports.list = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ patients });
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

exports.patients = async (req, res) => {
  try {
    let endDate = dayjs().startOf("day").add(1, "day").toDate();
    let startDate;
    if(req.params.duration == 'daily') {
      startDate = dayjs().startOf("day").toDate();
    } else if(req.params.duration == 'weekly') {
      startDate = dayjs().startOf("day").subtract(1, 'week').toDate();
    } else {
      startDate = dayjs().startOf("day").subtract(1, 'month').toDate();
    }

    const patients = await Patient.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lt: endDate
          }
        }
      },
      {
        $group: {
          _id: null,
          count: {
            $sum: 1
          }
        }
      }
    ]);
    res.status(200).json(patients[0]?.count || 0);
  } catch(err) {
    res.status(400).json({ message: err?.message });
  }
};

exports.barChart = async (req, res) => {
  try {
    let startDate = dayjs().startOf("day").subtract(6, req.params.duration);
    let endDate = dayjs().add(1, 'day').toDate();
    let barChartData = [];
    const data = await Patient.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate.toDate(),
            $lt: endDate
          }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt"}},
          count: {
            $sum: 1
          }
        }
      },
      {
        $sort: {
          _id: 1
        }
      }

    ]);

    for(let i = 0; i < 7; i++) {
      let index = data.findIndex((x) =>
        x._id == startDate.format("YYYY-MM-DD")
      );
      if(index == -1) {
        barChartData.push({ _id: startDate.format("YYYY-MM-DD"), count: 0});
      } else  {
        barChartData.push(data[index]);
      }
      startDate = startDate.add(1, 'day');
    }

    res.status(200).json({ barChartData });
  } catch(err) {
    console.log(err);
    res.status(400).json({ message: err?.message });
  }
}
