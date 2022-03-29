'use strict';

const app = require('./app');
require('colors');

const config = require('../app.config.json');

app.listen(config.PORT, () => {
  console.log(`\n- Server running on port ${config.PORT} -`.magenta);
});
