'use strict';

const reviewModel = require('../models/review.model');

/**
 * @param {Request} request
 * @param {Response} response
 */
async function addReview(request, response, next) {
  const { email } = request.currentUser;
  const { activity, score } = request.body;

  if (!activity || !score) {
    return response.status(422).send({
      message: 'Must provide the required fields',
      body: {
        activity: 'required',
        score: 'required',
      },
    });
  }

  const newReview = await reviewModel.addReview({
    activity,
    email,
    score,
  });

  return response.status(200).send(newReview);
}

module.exports = { addReview };
