const express = require("express");
const { get, list, create, update, erase} = require("../controllers/doctor.controller.js");
const router = express.Router();
const Validator = require('../config/validation');
const { authValidation } = require("../config/auth");

router.route('/').get(authValidation, list).post(authValidation, Validator('doctorPost'), create);

router.route('/:id').get(get).put(authValidation, Validator('doctorPut'), update).delete(authValidation, erase);

module.exports = router;
