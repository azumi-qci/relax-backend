const database = require('../database');
const { UserSchema } = require('./user.schema');

const { Schema } = database;

const ReviewSchema = new Schema({
  activity: String,
  email: String,
  review_time: Date,
  score: Number,
});

const Review = database.model('Review', ReviewSchema);

module.exports = { ReviewSchema, Review };
