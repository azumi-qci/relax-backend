'use strict';

const app = require('./app');
require('colors');

const config = require('../app.config.json');

app.listen(config.SERVER_PORT, () => {
  console.log(`\n- Server running on port ${config.SERVER_PORT} -`.magenta);
});
