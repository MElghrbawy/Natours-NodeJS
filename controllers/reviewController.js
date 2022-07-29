// const Review = require('./../models/reviewModel');
const catchAsync = require('../utils/catchAsync');
// const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = catchAsync(async (req, res, next) => {});
exports.getReview = catchAsync(async (req, res, next) => {});
exports.createReview = catchAsync(async (req, res, next) => {});
exports.updateReview = catchAsync(async (req, res, next) => {});
exports.deleteReview = catchAsync(async (req, res, next) => {});
