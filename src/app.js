'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Instantiate express app
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

module.exports = app;
