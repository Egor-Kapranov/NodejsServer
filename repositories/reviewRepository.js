const { Review } = require("../models/models");

exports.addReview = async (reviewData) => {
  try {
    const review = await Review.create(reviewData);
    return review;
  } catch (error) {
    throw new Error("Failed to add review");
  }
};
