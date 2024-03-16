const getReviewsRepository = require("../repositories/getReviewsRepository");

exports.getAllReviewsByRestaurant = async (restaurantId) => {
  try {
    const reviews = await getReviewsRepository.getAllReviewsByRestaurant(
      restaurantId
    );
    return reviews;
  } catch (error) {
    throw new Error("Failed to retrieve reviews");
  }
};

exports.getUserById = async (userId) => {
  try {
    const user = await getReviewsRepository.getUserById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};
