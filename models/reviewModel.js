const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review cant be empty']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  changedAt: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tour'
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
