// model
const {
  users: userModels,
  access_tokens: accessToken,
} = require("@models")

// helper
const uuid = require("@helpers/uuidGenerator")

module.exports = {
  findOrCreateAuth: async (usage, refreshToken, accessTokenJWT, expiredDate, userId) => {
    try {
      let tokenData = null
      let isRefresh = null
      let isLoginUser = false
      switch (usage) {
        case "login":
          tokenData = await accessToken.findOne({ where: { user_id: userId } })
          break
        case "refresh":
          isRefresh = true
          refreshToken = uuid.uid(100)
          break
      }

      expiredDate = new Date(expiredDate)
      if (tokenData || isRefresh) {
        await accessToken.update({
          access_token: accessTokenJWT,
          access_token_expired_at: expiredDate,
          refresh_token: refreshToken,
          updated_at: new Date(),
        }, { where: { user_id: userId } })
      } else {
        await accessToken.create({
          user_id: userId,
          access_token: accessTokenJWT,
          access_token_expired_at: expiredDate,
          refresh_token: refreshToken,
          del_status: false,
          last_update_user_id: userId,
          updated_at: new Date(),
          created_user_id: userId,
          created_at: new Date(),
        })
      }

      const userData = await userModels.findOne({
        where: {
          id: userId,
          del_status: false,
        }
      })
      if (userData) {
        isLoginUser = true
      }
      const result = {
        access_token: accessTokenJWT,
        refresh_token: refreshToken,
        id: userId,
        username: userData.username,
        status_login: isLoginUser,
        access_token_expired_at: expiredDate,
      }
      return result
    } catch (error) {
      console.log("##Error findOrCreate function", error)
    }
  },
}
  