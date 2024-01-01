const express = require("express");
const router = express.Router();

const {
  login,
  logout,
  googleAuth,
  googleCallback,
  googleFailure,
} = require("../controllers/authController");

router.get("/login", login);
router.get("/logout", logout);
router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);
router.get("/google/failure", googleFailure);

module.exports = router;
