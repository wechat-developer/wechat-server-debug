
module.exports = app => {
  class ApiController extends app.Controller {
    * users() {
      const { ctx } = this;
      const users = yield ctx.model.User.findAll();

      ctx.status = 201;
      ctx.body = {
        code: 0,
        message: 'ok',
        data: {
          users,
        },
      };
    }
  }

  return ApiController;
};
