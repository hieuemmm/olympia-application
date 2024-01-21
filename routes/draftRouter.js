const express = require("express");
const router = express.Router();
const draftController = require("../controllers/draftController");

router.get("/HauNT", draftController.HauNT);
router.get("/HieuVV", draftController.HieuVV);

module.exports = router;
