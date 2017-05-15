'use strict';

module.exports = app => {
  class ViewController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
  }
  return ViewController;
};
