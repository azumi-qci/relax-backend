'use strict';

const { Review } = require('../schemas/review.schema');

const reviewModel = {};

/**
 * Adds a activity review
 * @param {object} data
 * @param {string} data.activity
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

module.exports = reviewModel;
