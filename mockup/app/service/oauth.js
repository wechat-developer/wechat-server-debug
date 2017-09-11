module.exports = app => {
  let memoryCache = {};

  return class OAuth extends app.Service {
    get(key) {
      const { ctx } = this;
      const data = Object.assign({}, memoryCache[key]);
      delete memoryCache[key];
      return data;
    }

    * getAccessToken(code) {
      const { ctx, config } = this;
      const appid = config.props['wechat.appid'];
      const appsecret = config.props['wechat.appsecret'];
      try {
        const accessToken = 'access-token';
        const openId = 'open-id';
        memoryCache[code] = { accessToken, openId };
      } catch (err) {
        ctx.logger.error(err);
      }
    }
  };
}
