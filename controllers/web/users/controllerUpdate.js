// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
const validateInputBodyUser = require('@helpers/validate_input_body/users/validateInputBodyUser')
// query
const { queryGetOneUser } = require('@query/users/findOne')
// library
const bcrypt = require("bcryptjs");

module.exports = {
  update: async (req, res) => {
    const userId = req.params.user_id
    const linkApi = `/api/web/user/${userId} -update-`
    try {
      const { 
        name, 
        username, 
        password, 
        address
    } = req.body
      const userData = await queryGetOneUser(linkApi, userId, res)
      if(userData !== undefined){
        const dataError = await validateInputBodyUser.validateInputBodyUser(res, req.body, linkApi, userId)
        if (dataError === undefined) {

          userData.name = name,
          userData.username = username,
          userData.address = address,
          userData.password = bcrypt.hashSync(password),
          userData.last_update_user_id = userId
          userData.updated_at = new Date()
          await userData.save()

          const result = {
            id: userData.id,
            name: userData.name,
            username: userData.username,
            address: userData.address,
            delStatus: userData.del_status
          }
          return success(res, 'Ubah User Berhasil', result, linkApi, userId)
        }
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
