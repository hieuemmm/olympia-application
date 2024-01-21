const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/logout", authController.logout);
router.get("/google", authController.googleAuth);
router.get("/google/callback", authController.googleCallback);
router.get("/google/failure", authController.googleFailure);

module.exports = router;
