const OAuth = require('wechat-oauth');


function getAccessToken(code, appid, appsecret) {
  return new Promise((resolve, reject) => {
    const client = new OAuth(appid, appsecret);
    client.getAccessToken(code, function (err, { data }) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


module.exports = app => {
  let memoryCache = {};

  return class OAuth extends app.Service {
    get(key) {
      return memoryCache[key];
    }

    set(key, value) {
      memoryCache[key] = value;
    }

    * getAccessToken(code) {
      const { ctx, config } = this;
      const { accessToken, openId } = yield getAccessToken(config.props['wechat.appid'], config.props['wechat.appsecret']);
      memoryCache[code] = { accessToken, openId };
    }
  };
}
