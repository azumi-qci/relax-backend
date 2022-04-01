'use strict';

const router = require('express').Router();

const authRoutes = require('./auth.routes');

// Modules
router.use('/auth', authRoutes);

// Base route
router.use('/', (request, response) => {
  return response.status(200).json({
    message: 'The API works!',
  });
});

module.exports = router;
