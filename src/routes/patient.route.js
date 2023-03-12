const express = require("express");
const router = express.Router();
const { get, list, create, erase, update } = require("../controllers/patient.controller");
const Validator = require("../config/validation");
const { authValidation } = require("../config/auth");

router.route("/").get(authValidation, list).post(authValidation, Validator('patient'), create);
router.route("/:id").get(get).put(authValidation, Validator('patient'), update).delete(authValidation, erase);

module.exports = router;
