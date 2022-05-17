'use strict';

const database = require('../database');

const { Schema } = database;

const ActivitySchema = new Schema({
  name: String,
  bgURL: String,
  stress: Number,
  anxiety: Number,
  anger: Number,
  addition_time: {
    type: Date,
    default: Date.now,
  },
});

const Activity = database.model('Activity', ActivitySchema);

module.exports = { ActivitySchema, Activity };
