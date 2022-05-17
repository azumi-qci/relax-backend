const database = require('../database');

const { Schema } = database;

const ReviewSchema = new Schema({
  activity: String,
  email: String,
  review_time: Date,
  score: Number,
});

const Review = database.model('Review', ReviewSchema);

module.exports = { ReviewSchema, Review };
