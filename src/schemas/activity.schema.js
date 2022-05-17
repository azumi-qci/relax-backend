'use strict';

const database = require('../database');

const { Schema } = database;

const ActivitySchema = new Schema({
  name: String,
  type: String,
  addition_time: Date,
});

const Activity = database.model('Activity', ActivitySchema);

module.exports = { ActivitySchema, Activity };
