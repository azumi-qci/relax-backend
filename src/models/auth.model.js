'use strict';

const { User } = require('../schemas/user.schema');

const userModel = {};

/**
 * Adds a user to the database
 * @param {object} data
 * @param {string} data.displayName
 * @param {number} data.age
 * @param {string} data.email
 * @param {string} data.password
 */
userModel.createUser = async ({ displayName, age, email, password }) => {
  const newUser = new User({
    displayName,
    age,
    email,
    password,
  });

  return await newUser.save();
};

/**
 * Search a user by their email
 * @param {object} data
 * @param {string} data.email
 */
userModel.searchByEmail = async ({ email }) => {
  return await User.findOne({
    email,
  }).exec();
};

module.exports = userModel;
