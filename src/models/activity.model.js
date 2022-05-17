'use strict';

const { Activity } = require('../schemas/activity.schema');

const activityModel = {};

/**
 * Gets 3 relevant activities
 */
activityModel.getActivities = async () => {
  return await Activity.find().limit(3).exec();
};

module.exports = activityModel;
