const reservationRepository = require("../repositories/reservationRepository");

exports.createReservation = async (reservationData) => {
  try {
    const reservation = await reservationRepository.createReservation(
      reservationData
    );
    return reservation;
  } catch (error) {
    console.error("Error in reservationService:", error);
    throw new Error(`Failed to create reservation: ${error.message}`);
  }
};

exports.getUserByTelephone = async (telephone) => {
  try {
    const user = await reservationRepository.getUserByTelephone(telephone);
    return user;
  } catch (error) {
    throw error;
  }
};
