'use strict';

const router = require('express').Router();

const activityController = require('../controllers/activity.controller');

const verifyToken = require('../helpers/verifyToken');

// GET
router.get('/', verifyToken, activityController.getActivities);

module.exports = router;
