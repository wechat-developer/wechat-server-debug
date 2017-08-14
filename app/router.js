'use strict';

module.exports = app => {
  app.get('/oauth', 'view.oauth');
};
