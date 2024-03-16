const restaurantRepository = require("../repositories/restaurantRepository");

exports.addRestaurant = async (restaurantData) => {
  try {
    const restaurant = await restaurantRepository.addRestaurant(restaurantData);
    return restaurant;
  } catch (error) {
    throw new Error("Failed to add restaurant");
  }
};

exports.getRestaurantById = async (restaurantId) => {
  try {
    const restaurant = await restaurantRepository.getRestaurantById(
      restaurantId
    );
    return restaurant;
  } catch (error) {
    throw new Error(`Failed to get restaurant by ID ${restaurantId}`);
  }
};
