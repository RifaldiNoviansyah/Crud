require("@middlewares/strategies/basic");
require("@middlewares/strategies/bearer");

const passport = require("passport");
const { users: userModels } = require("@models");

passport.serializeUser((users, done) => done(null, users.id));

passport.deserializeUser((id, done) => {
  try {
    userModels.findOne({ where: { id } }).then((users) => done(null, users));
  } catch (error) {
    done(error);
  }
});
