// model
const { 
    users: userModels,
} = require('@models')
  // helpers
const { internalServerError, notFound } = require('@helpers/errorResponse')

module.exports = {
  queryGetOneUser: async (linkApi, userId, res) => {
    try {
      const serviceUserData = await userModels.findOne(
        {
          where: { 
                id: userId,
                del_status: false
            },
        }
      )
      if (!serviceUserData) {
        return notFound(res, 'Data User Tidak Ditemukan', userId, linkApi, userId)
      } else {
        return serviceUserData
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
  