const reviewRepository = require("../repositories/reviewRepository");

exports.addReview = async (reviewData) => {
  try {
    const review = await reviewRepository.addReview(reviewData);
    return review;
  } catch (error) {
    throw new Error("Failed to add review");
  }
};
