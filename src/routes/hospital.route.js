const express = require("express");
const router = express.Router();
const { list, create, update, erase , get} = require("../controllers/hospital.controller");
const Validator = require("../config/validation");
const { authValidation } = require("../config/auth");

router.route("/").get(authValidation, list).post(authValidation, Validator('hospital'), create);
router.route("/:id").put(authValidation, Validator('hospital'), update).delete(authValidation, erase).get(get);

module.exports = router;
