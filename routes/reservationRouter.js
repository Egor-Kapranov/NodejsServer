const express = require("express");
const router = express.Router();

const reservationController = require("../controllers/reservationController");

router.post("/add", reservationController.createReservation);
router.get("/take/:telephone", reservationController.getUserByTelephone);
module.exports = router;
