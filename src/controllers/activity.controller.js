'use strict';

const activityModel = require('../models/activity.model');

/**
 * @param {Request} request
 * @param {Response} response
 */
async function getActivities(request, response, next) {
  const activities = await activityModel.getActivities();

  return response.status(200).send([...activities]);
}

module.exports = { getActivities };
