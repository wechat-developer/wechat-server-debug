'use strict';

const path = require('path');


module.exports = appInfo => {
  const config = {};

  config.keys = 'default-dev-key';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return config;
};
