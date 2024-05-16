const express = require("express");
const {registerUser, loginUser, findUser} = require("../Controlles/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:useId", findUser);

module.exports = router;