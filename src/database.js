'use strict';

const mongoose = require('mongoose');

const CONFIG = require('../app.config.json');

mongoose.connect(CONFIG.MONGODB_URI, CONFIG.MONGODB_CONFIG).catch((error) => {
  console.log('\n- Error al conectar con MongoDB -'.red);
  console.log(error);
});

module.exports = mongoose;
