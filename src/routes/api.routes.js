'use strict';

const router = require('express').Router();

const authRoutes = require('./auth.routes');
const reviewRoutes = require('./review.routes');
const activityRoutes = require('./activity.routes');

// Modules
router.use('/auth', authRoutes);
router.use('/review', reviewRoutes);
router.use('/activity', activityRoutes);

// Base route
router.use('/', (request, response) => {
  return response.status(200).json({
    message: 'The API works!',
  });
});

module.exports = router;
