const express = require("express");
const router = express.Router();
const { CheckLogin } = require("../controllers/authController");

const {
  home,
  footer
} = require("../controllers/homeController");

router.get("/", CheckLogin, home);
router.get("/home", home);
router.get("/footer", footer);

module.exports = router;
