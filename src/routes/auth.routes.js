'use strict';

const router = require('express').Router();

const authController = require('../controllers/auth.controller');

// POST
router.post('/login', authController.login);
router.post('/signup', authController.createUser);

module.exports = router;
