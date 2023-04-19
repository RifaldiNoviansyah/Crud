const passport = require("passport");
const { Strategy } = require("passport-http-bearer");

const {
  access_tokens: accessTokenModels,
  users: userModels,
} = require("@models");
const jwt = require("jsonwebtoken");

passport.use("bearer", new Strategy(async (token, done) => {
  try {
    const jwtAccess = jwt.verify(token, process.env.JWT);
    const getAccessTokenData = await accessTokenModels.findOne({
      where: {
        del_status: false,
        access_token: token,
        user_id: jwtAccess.data.id,
      },
    });
    if (!getAccessTokenData) throw new Error("Invalid Token");

    const userData = await userModels.findOne({ where: { id: jwtAccess.data.id, del_status: false } });

    if (!userData) return done(null, false);
    return done(null, userData, { scope: "*" });
  } catch (error) {
    console.log("#Bearer Auth Error", error);
    if (error.message === "JsonWebTokenError") return done("Token Error");
    return done(error.message);
  }
}));
