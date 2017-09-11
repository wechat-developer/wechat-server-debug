const rnd = require('vanilla.js/random/dummy');


module.exports = app => {
  class PivotController extends app.Controller {
    * oauth() {
      const { ctx, config } = this;
      const { code, r } = ctx.queries;

      if (!r) {
        throw new Error('INVALID R');
      }

      yield ctx.service.oauth.getAccessToken(code);

      // FIXME:
      if (r.indexOf('?') > -1) {
        return ctx.redirect(r + '&code=' + code);
      } else {
        return ctx.redirect(r + '?code=' + code);
      }

      // ctx.body = `r: ${r}, code: ${code}`;
      // ctx.status = 200;
    }

    * oauthUrl() {
      const { ctx, config } = this;
      const { r } = ctx.request.body;

      if (!r) {
        throw new Error('INVALID R');
      }

      const selfUrl = config.props['url.self'];

      const code = rnd();
      const url = `${selfUrl}/oauth?r=${encodeURIComponent(r)}&code=${code}`;

      ctx.body = { url };
      ctx.status = 201;
    }

    * oauthInfo() {
      const { ctx, config } = this;
      const { code } = ctx.queries;

      const { openId } = ctx.service.oauth.get(code);

      ctx.body = { openId };
      ctx.status = 201;
    }
  }

  return PivotController;
};
