// helpers
const { badInput } = require('@helpers/errorResponse')

module.exports = {
  validateInputBodyUser: async (res, body, linkApi, userId) => {
    if (body.name === null || body.name.length === 0) return [false, badInput(res, 'Name Tidak boleh kosong', body.name, linkApi, userId)]
    if (body.username === null || body.username.length === 0) return [false, badInput(res, 'Username Tidak boleh kosong', body.username, linkApi, userId)]
    if (body.password === null || body.password.length === 0) return [false, badInput(res, 'Password boleh kosong', body.password, linkApi, userId)]
    if (body.address === null || body.address.length === 0) return [false, badInput(res, 'Address Tidak boleh kosong', body.address, linkApi, userId)]
  }
}
