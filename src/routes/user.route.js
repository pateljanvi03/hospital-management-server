const express = require("express");
const router = express.Router();
const { create, list, update, login } = require("../controllers/user.controller");
const Validators = require("../config/validation");
const { authValidation } = require("../config/auth");

router.route("/").post(authValidation, Validators('user'), create).get(authValidation, list);
router.route("/:id").put(authValidation, Validators('user'), update);
router.route("/login").post(login);

module.exports = router;
