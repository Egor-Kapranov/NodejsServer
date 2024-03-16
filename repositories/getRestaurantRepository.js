const { Restaurant } = require("../models/models");

exports.getAllRestaurants = async () => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: ["id", "name", "description", "image"],
    });
    return restaurants;
  } catch (error) {
    throw new Error("Failed to retrieve restaurants");
  }
};
