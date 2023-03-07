const express = require("express");
const router = express.Router();
const { list, create, update, erase , get} = require("../controllers/hospital.controller");
const Validator = require("../config/validation"); 

router.route("/").get(list).post(Validator('hospital'), create);
router.route("/:id").put(Validator('hospital'), update).delete(erase).get(get);

module.exports = router;