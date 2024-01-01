const express = require("express");
const router = express.Router();
const { CheckLogin } = require("../controllers/authController");

const {
  home,
} = require("../controllers/homeController");

router.get("/", CheckLogin, home);
router.get("/home", home);

module.exports = router;
