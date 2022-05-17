'use strict';

const { Activity } = require('../schemas/activity.schema');

const activityModel = {};

/**
 * Gets 3 relevant activities
 */
activityModel.getActivities = async () => {
  return await Activity.find().exec();
};

module.exports = activityModel;
