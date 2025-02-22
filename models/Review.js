const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model if applicable
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  reviewMessage: {
    type: String,
    required: true,
  },
  reviewValue: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ProductReview', ReviewSchema);
