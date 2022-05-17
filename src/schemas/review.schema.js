const database = require('../database');
const { ActivitySchema } = require('./activity.schema');

const { Schema } = database;

const ReviewSchema = new Schema({
  activity: ActivitySchema,
  email: String,
  review_time: {
    type: Date,
    default: Date.now,
  },
  score: Number,
});

const Review = database.model('Review', ReviewSchema);

module.exports = { ReviewSchema, Review };
