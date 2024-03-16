const express = require("express");
const router = express.Router();

const tableController = require("../controllers/tableController");

router.post("/set", tableController.addTable);

module.exports = router;
