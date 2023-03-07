const express = require("express");
const router = express.Router();
const { get, list, create, erase, update } = require("../controllers/department.controller.js");
const Validator = require('../config/validation');

router.route("/").get(list).post(Validator('department'),create);
router.route("/:id").get(get).put(Validator('department'), update).delete(erase);

module.exports = router;
