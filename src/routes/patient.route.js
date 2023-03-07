const express = require("express");
const router = express.Router();
const { get, list, create, erase, update } = require("../controllers/patient.controller");
const Validator = require("../config/validation");

router.route("/").get(list).post(Validator('patient'), create);
router.route("/:id").get(get).put(Validator('patient'), update).delete(erase);

module.exports = router; 