// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetOneUser } = require('@query/users/findOne')

module.exports = {
  delete: async (req, res) => {
    const userId = req.params.user_id
    const linkApi = `/api/web/user/${userId} -delete-`
    try {
      const userData = await queryGetOneUser(linkApi, userId, res)
      if(userData !== undefined){
            userData.del_status = true
            userData.deleted_date_time = new Date()
            await userData.save()

          const result = {
            id: userData.id,
            name: userData.name,
            username: userData.username,
            address: userData.address,
            delStatus: userData.del_status
          }
          return success(res, 'Delete User Berhasil', result, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
