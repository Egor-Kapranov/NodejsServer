const express = require("express");
const router = express.Router();
const checkRole = require("../middleware/checkRoleMiddleware");
const restaurantController = require("../controllers/restaurantController");

router.post("/add", restaurantController.addRestaurant);
router.get("/getAll", restaurantController.getAllRestaurants);
router.get("/:restaurantId", restaurantController.getRestaurantById);

module.exports = router;
