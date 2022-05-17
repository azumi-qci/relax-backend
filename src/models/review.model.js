'use strict';

const { Review } = require('../schemas/review.schema');

const reviewModel = {};

/**
 * Adds a activity review
 * @param {object} data
 * @param {object} data.activity
 * @param {string} data.email
 * @param {number} data.score
 */
reviewModel.addReview = async ({ activity, email, score }) => {
  const newReview = new Review({
    activity,
    email,
    review_time: new Date().toISOString(),
    score,
  });

  return await newReview.save();
};

/**
 * Gets all the user reviews
 * @param {object} data
 * @param {string} data.email
 * @returns
 */
reviewModel.getAllReviews = async ({ email }) => {
  return await Review.find({
    email,
    score: {
      $gte: 3,
    },
  }).exec();
};

module.exports = reviewModel;
