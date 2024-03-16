const { Restaurant } = require("../models/models");

exports.addRestaurant = async (restaurantData) => {
  try {
    const restaurant = await Restaurant.create(restaurantData);
    return restaurant;
  } catch (error) {
    throw new Error("Failed to add restaurant");
  }
};

exports.getRestaurantById = async (restaurantId) => {
  try {
    const restaurant = await Restaurant.findByPk(restaurantId);
    return restaurant;
  } catch (error) {
    throw new Error(`Failed to get restaurant by ID ${restaurantId}`);
  }
};
