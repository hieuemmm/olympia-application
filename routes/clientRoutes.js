const express = require("express");
const router = express.Router();
const { CheckLogin } = require("../controllers/authController");

const {
  home,
  footer,
  HieuVV5,
  addSingleQuestion,
} = require("../controllers/homeController");

router.get("/", CheckLogin, home);
router.get("/home", home);
router.get("/footer", footer);
router.get("/HieuVV5", HieuVV5);
router.get("/addSingleQuestion", addSingleQuestion);

module.exports = router;
