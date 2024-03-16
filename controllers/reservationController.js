const {
  reservationValidation,
} = require("../middleware/reservationValidation");
const reservationService = require("../services/reservationService");

exports.createReservation = async (req, res) => {
  try {
    const { error } = reservationValidation(req.body);
    if (error) {
      console.log("Validation error:", error);
      return res.status(400).json({ error: error.details });
    }
    const reservationData = req.body;
    const reservation = await reservationService.createReservation(
      reservationData
    );
    return res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create reservation" });
  }
};

exports.getUserByTelephone = async (req, res) => {
  try {
    const telephone = req.params.telephone;
    const user = await reservationService.getUserByTelephone(telephone);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user by telephone:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
