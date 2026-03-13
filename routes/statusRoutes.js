const express = require("express");
const router = express.Router();

const statusController = require("../controllers/statusController");

router.post("/getstatus",statusController.getStatus);

module.exports = router;