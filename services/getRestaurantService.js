const getRestaurantRepository = require("../repositories/getRestaurantRepository");

exports.getAllRestaurants = async () => {
  try {
    const restaurants = await getRestaurantRepository.getAllRestaurants();
    return restaurants;
  } catch (error) {
    throw new Error("Failed to retrieve restaurants");
  }
};
