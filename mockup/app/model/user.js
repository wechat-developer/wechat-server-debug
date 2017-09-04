module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    username: STRING(128),
  });

  // User.findByLogin = function* (login) {
  //   return yield this.findOne({ login: login });
  // }

  // User.prototype.logSignin = function* () {
  //   yield this.update({ last_sign_in_at: new Date() });
  // }

  return User;
};
