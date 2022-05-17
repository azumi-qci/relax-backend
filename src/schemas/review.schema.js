const database = require('../database');

const { Schema } = database;

const ReviewSchema = new Schema({
  activity: String,
  email: String,
  review_time: {
    type: Date,
    default: Date.now,
  },
  score: Number,
});

const Review = database.model('Review', ReviewSchema);

module.exports = { ReviewSchema, Review };
