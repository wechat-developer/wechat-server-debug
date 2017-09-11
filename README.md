wechat-pivot
==

pivot
--

common wechat integration

1. 通过内部接口获得微信的授权页面

```
POST /private-api/oauth/snsapi-base:url HTTP/1.1
Host: pivot.private
Content-Type: application/json

{ "r": "https://app.example.com/wechat-login/page" }
```

```json
{
    "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wechatappid&redirect_uri=http%3A%2F%2F127.0.0.1%3A7002%2Foauth%3Fr%3Dhttps%253A%252F%252Fapp.example.com%252Fwechat-login%252Fpage&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
}
```

2. 授权后回跳 pivot `http://127.0.0.1:7002/oauth?code=access-token&r=https%3A%2F%2Fapp.example.com%2Fwechat-login%2Fpage`，pivot 通过 code=access-token 获取用户信息，并保存在 session 里，仍然用 code 做 key

3. pivot 回跳应用的 /wechat-login/{page} 页面，通过内部接口通过 code 获取用户信息，pivot 将 session 中的用户信息返回，并清空该 key

mockup
--

and the corresponding mockup
