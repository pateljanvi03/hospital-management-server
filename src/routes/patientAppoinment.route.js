const express = require("express");
const router = express.Router();
const { get, list, create, erase, update } = require("../controllers/patientAppoinment.controller");
const Validator = require("../config/validation");

router.route("/").get(list).post(create);
router.route("/:id").get(get).put(update).delete(erase);

module.exports = router;
