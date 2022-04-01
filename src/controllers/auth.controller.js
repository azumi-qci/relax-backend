'use strict';

const authModel = require('../models/auth.model');

/**
 * @param {Request} request
 * @param {Response} response
 */
function createUser(request, response, next) {
  const { username, password } = request.body;

  if (!username || !password) {
    console.log('MAL :(');
  }

  console.log('BIEN :)');
}

module.exports = { createUser };
