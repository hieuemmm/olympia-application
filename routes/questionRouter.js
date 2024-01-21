const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/addSingleQuestion", questionController.addSingleQuestion);
router.get("/", questionController.questionsList);
router.get("", questionController.questionsList);

module.exports = router;
