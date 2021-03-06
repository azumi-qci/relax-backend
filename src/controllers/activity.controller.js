'use strict';

const KNN = require('ml-knn');

const activityModel = require('../models/activity.model');
const reviewModel = require('../models/review.model');

/**
 * @param {Request} request
 * @param {Response} response
 */
async function getActivities(request, response, next) {
  const { email } = request.currentUser;

  const activities = await activityModel.getActivities();

  // Get the train set
  const trainSet = activities.map((value) => [
    value.stress,
    value.anxiety,
    value.anger,
  ]);

  const trainLabels = activities.map((value) => value.name);

  const knn = new KNN(trainSet, trainLabels, { k: 2 });

  // Get the user reviews
  const reviews = await reviewModel.getAllReviews({ email });

  const reviewsDataset = reviews.map((item) => [
    item.activity.stress,
    item.activity.anxiety,
    item.activity.anger,
  ]);

  if (reviewsDataset.length >= 3) {
    const ans = knn.predict(reviewsDataset);

    const predictions = activities.filter((value) => ans.includes(value.name));

    return response.status(200).send([...predictions.slice(0, 3)]);
  }

  return response.status(200).send([...activities.slice(0, 3)]);
}

module.exports = { getActivities };
