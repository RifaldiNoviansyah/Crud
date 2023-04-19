// model
const { 
    users: userModels
} = require('@models')
  // helpers
const { internalServerError } = require('@helpers/errorResponse')

module.exports = {
  queryGetAllUsers: async (linkApi, userId, res) => {
    try {
      const userDatas = await userModels.findAll(
        {
          where: { del_status: false },
        }
      )
      return userDatas
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
  