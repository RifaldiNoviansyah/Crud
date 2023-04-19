// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetOneUser } = require('@query/users/findOne')
// library
const moment = require("moment");

module.exports = {
  show: async (req, res) => {
    const userId = req.params.user_id
    const linkApi = `/api/web/user/${userId} -show-`
    try {
      const userData = await queryGetOneUser(linkApi, userId, res)
      if(userData !== undefined){
        const result = {
            id: userData.id,
            name: userData.name,
            username: userData.username,
            address: userData.address,
            delStatus: userData.del_status
        }
        return success(res, 'Menampilkan Detail User Berhasil', result, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
