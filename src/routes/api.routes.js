'use strict';

const router = require('express').Router();

const authRoutes = require('./auth.routes');
const reviewRoutes = require('./review.routes');

// Modules
router.use('/auth', authRoutes);
router.use('/review', reviewRoutes);

// Base route
router.use('/', (request, response) => {
  return response.status(200).json({
    message: 'The API works!',
  });
});

module.exports = router;
