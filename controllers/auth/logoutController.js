const {
    users: userModels,
    access_tokens: accessToken,
  } = require("@models");
  
  const response = require("@helpers/response");
  const errorResponse = require("@helpers/errorResponse");
  
  module.exports = {
    logout: async (req, res) => {
      try {
        const { username } = req.body;
        const userData = await userModels.findOne({
          where: {
            del_status: false,
            username,
          },
        });
        if (!userData) return response(res, 401, "User Telah Logout, Tolong log in Kembali", null);
  
        const userDataAccessToken = await accessToken.findOne({
          where: {
            del_status: false,
            user_id: userData.id,
          },
        });
        if (userDataAccessToken) {
          userDataAccessToken.access_token = null;
          userDataAccessToken.access_token_expired_at = null;
          userDataAccessToken.refresh_token = null;
          await userDataAccessToken.save();
        }
        userData.status_login = false;
        await userData.save();
  
        return response(res, 200, "Log Out Berhasil", userData);
      } catch (error) {
        console.log(error);
        return errorResponse.internalServerError(res, error.message);
      }
    },
  };
  