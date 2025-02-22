const express = require("express");

const {
  addProductReview,
  getProductReviews,
  getUserReviews, // Import the new controller function
} = require("../../controllers/shop/product-review-controller");

const router = express.Router();

router.post("/add", addProductReview);
router.get("/:productId", getProductReviews);
router.get("/user/:userId", getUserReviews); // New route for user reviews

module.exports = router;
