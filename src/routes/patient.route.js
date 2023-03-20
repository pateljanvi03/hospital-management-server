const express = require("express");
const router = express.Router();
const { get, list, create, erase, update, patients, barChart } = require("../controllers/patient.controller");
const Validator = require("../config/validation");
const { authValidation } = require("../config/auth");

router.route("/").get(authValidation, list).post(authValidation, Validator('patient'), create);
router.route("/:id").get(get).put(authValidation, Validator('patient'), update).delete(authValidation, erase);
router.route("/patientCount/:duration").get(patients);
router.route("/barChart/:duration").get(barChart);

module.exports = router;
