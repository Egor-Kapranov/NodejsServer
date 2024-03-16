const reviewService = require("../services/reviewService");
const { reviewValidation } = require("../middleware/reviewValidation");
const getReviewsService = require("../services/getReviewsService");

exports.addReview = async (req, res) => {
  try {
    const { error } = reviewValidation(req.body);
    if (error) {
      console.log("Validation error:", error);
      return res.status(400).json({ error: error.details });
    }
    const reviewData = req.body;
    const review = await reviewService.addReview(reviewData);
    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ error: "Failed to add review" });
  }
};

exports.getAllReviewsByRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const reviews = await getReviewsService.getAllReviewsByRestaurant(
      restaurantId
    );
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve reviews" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await getReviewsService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.error("Ошибка при получении пользователя:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
