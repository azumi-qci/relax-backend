'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authModel = require('../models/auth.model');

const CONFIG = require('../../app.config.json');

/**
 * @param {Request} request
 * @param {Response} response
 */
async function createUser(request, response, next) {
  const { displayName, age, email, password } = request.body;

  if (!displayName || !age || !email || !password) {
    return response.status(422).send({
      message: 'Must provide the required fields',
      body: {
        displayName: 'required',
        age: 'required',
        email: 'required',
        password: 'required',
      },
    });
  }

  // Check if the email is already taken
  const foundUser = await authModel.searchByEmail({
    email,
  });

  if (foundUser) {
    return response.status(409).send({
      message: 'Email is already taken',
      email,
    });
  }

  const newUser = await authModel.createUser({
    displayName,
    age,
    email,
    password: bcrypt.hashSync(password, CONFIG.BCRYPT_SALT_ROUNDS),
  });

  return response.status(200).send({
    displayName: newUser.displayName,
    age: newUser.age,
    email: newUser.email,
  });
}

/**
 * @param {Request} request
 * @param {Response} response
 */
async function login(request, response, next) {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(422).send({
      message: 'Must provide the required fields',
      body: {
        email: 'required',
        password: 'required',
      },
    });
  }

  const foundUser = await authModel.searchByEmail({
    email,
  });

  if (!foundUser) {
    return response.status(401).send({
      message: 'The provided credentials are not valid',
    });
  }

  // Verify the password using bcrypt
  const isCorrect = bcrypt.compareSync(password, foundUser.password);

  if (!isCorrect) {
    return response.status(401).send({
      message: 'The provided credentials are not valid',
    });
  }

  // Generate jwt
  const signedJWT = jwt.sign(
    {
      sub: foundUser._id,
      email: foundUser.email,
    },
    process.env.JWT_SECRET
  );

  return response.status(200).send({
    displayName: foundUser.displayName,
    age: foundUser.age,
    email: foundUser.email,
    token: signedJWT,
  });
}

module.exports = { createUser, login };
