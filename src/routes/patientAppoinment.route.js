const express = require("express");
const router = express.Router();
const { get, list, create, erase, update } = require("../controllers/patientAppoinment.controller");
const Validator = require("../config/validation");
const { authValidation } = require("../config/auth");

router.route("/").get(authValidation, list).post(authValidation,Validator('patientAppinmentPost'), create);
router.route("/:id").get(get).put(authValidation,Validator('patientAppinmentPost'), update).delete(authValidation, erase);

module.exports = router;
