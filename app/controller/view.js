
module.exports = app => {
  class ViewController extends app.Controller {
    * oauth() {
      const { ctx, config } = this;
      const { code, r } = ctx.queries;

      ctx.service.oauth.getAccessToken(code);

      return ctx.redirect(r + '&code=' + code);
    }
  }

  return ViewController;
};
