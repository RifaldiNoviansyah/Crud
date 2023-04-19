// model
const { users: userModels } = require('@models')
// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
const validateInputBodyUser = require('@helpers/validate_input_body/users/validateInputBodyUser')
// library
const bcrypt = require("bcryptjs");

module.exports = {
  create: async (req, res) => {
    const userId = null
    const linkApi = '/api/web/user -create-'
    try {
      const { 
        name, 
        username, 
        password, 
        address
    } = req.body

      const dataError = await validateInputBodyUser.validateInputBodyUser(res, req.body, linkApi, userId)
      if (dataError === undefined) {
        const userData = await userModels.create({
          name,
          username,
          password: bcrypt.hashSync(password),
          address,
          del_status: false,
          created_user_id: 0,
          created_at: new Date()
        })
        return success(res, 'Data User Berhasil Dibuat', userData, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
