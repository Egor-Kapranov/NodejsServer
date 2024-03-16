const { Review } = require("../models/models");
const { User } = require("../models/models");

exports.getAllReviewsByRestaurant = async (restaurantId) => {
  try {
    const reviews = await Review.findAll({
      where: { restaurant_id: restaurantId },
    });
    return reviews;
  } catch (error) {
    throw new Error("Failed to retrieve reviews");
  }
};

exports.getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    throw error;
  }
};
