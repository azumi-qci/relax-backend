'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const appRoutes = require('./routes/api.routes');

// Instantiate express app
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', appRoutes);

module.exports = app;
