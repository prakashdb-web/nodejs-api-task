const express = require("express");
const router = express.Router();

const recordsController = require("../controllers/recordsController");

router.get("/getname", recordsController.getName);

module.exports = router;