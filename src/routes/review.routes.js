'use strict';

const router = require('express').Router();

const reviewController = require('../controllers/review.controller');

const verifyToken = require('../helpers/verifyToken');

// POST
router.post('/', verifyToken, reviewController.addReview);

module.exports = router;
