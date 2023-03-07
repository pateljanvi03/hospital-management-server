const express = require("express");
const router = express.Router();
const doctor = require("./doctor.route");
const hospital = require("./hospital.route");
const department = require("./department.route");
const patient = require("./patient.route");
const patientAppoinment = require("./patientAppoinment.route");


router.use("/doctor", doctor);
router.use("/hospital", hospital);
router.use("/department", department);
router.use("/patient", patient);
router.use("/patient-appoinment", patientAppoinment);

module.exports = router;
