const { restaurantValidation } = require("../middleware/restaurantValidation");

const restaurantService = require("../services/restaurantService");
const getRestaurantService = require("../services/getRestaurantService");

exports.addRestaurant = async (req, res) => {
  try {
    const { error } = restaurantValidation(req.body);
    if (error) {
      return res.status(400).json({ error: error });
    }
    const restaurantData = req.body;
    const restaurant = await restaurantService.addRestaurant(restaurantData);
    return res.status(201).json(restaurant);
  } catch (error) {
    return res.status(500).json({ error: "Failed to add restaurant" });
  }
};

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await getRestaurantService.getAllRestaurants();
    return res.status(200).json(restaurants);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve restaurants" });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    const restaurant = await restaurantService.getRestaurantById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ error: "Ресторан не найден" });
    }

    return res.status(200).json(restaurant);
  } catch (error) {
    return res.status(500).json({ error: "Ошибка сервера" });
  }
};
