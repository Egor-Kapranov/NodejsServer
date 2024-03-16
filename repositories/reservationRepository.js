const { Reservations } = require("../models/models");
const { User } = require("../models/models");

exports.createReservation = async (reservationData) => {
  try {
    const reservation = await Reservations.create(reservationData);
    return reservation;
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw new Error("Failed to create reservation");
  }
};

exports.getUserByTelephone = async (telephone) => {
  try {
    const user = await User.findOne({
      where: { telephone: telephone },
      attributes: ["id"],
    });

    return user ? user.id : null;
  } catch (error) {
    throw error;
  }
};
