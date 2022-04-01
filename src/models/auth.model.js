'use strict';

const database = require('../database');
// Models
const { User } = require('../schemas/user.schema');

const userModel = {};

/**
 * Adds a user to the database
 * @param {string} username - Username
 * @param {string} password - User's password
 */
userModel.createUser = async (username, password) => {
  const newUser = new User({
    username,
    password,
  });

  // Save document
  await newUser.save();
};
