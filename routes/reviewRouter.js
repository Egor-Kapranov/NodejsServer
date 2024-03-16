const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController");

router.post("/add", reviewController.addReview);
router.get("/:restaurantId", reviewController.getAllReviewsByRestaurant);
router.get("/com/:userId", reviewController.getUserById);

module.exports = router;
