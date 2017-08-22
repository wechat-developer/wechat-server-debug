
module.exports = app => {
  class ViewController extends app.Controller {
    * index() {
      const { ctx } = this;
      yield ctx.render('index.html');
    }
  }

  return ViewController;
};
