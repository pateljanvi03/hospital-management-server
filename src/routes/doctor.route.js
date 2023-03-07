const express = require("express");
const { get, list, create, update, erase} = require("../controllers/doctor.controller.js");
const router = express.Router();
const Validator = require('../config/validation');

router.route('/').get(list).post(Validator('doctorPost'), create);

router.route('/:id').get(get).put(Validator('doctorPut'), update).delete(erase);

module.exports = router;