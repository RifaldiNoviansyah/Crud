// helpers
const { badInput } = require('@helpers/errorResponse')

module.exports = {
  validateInputBodyGame: async (res, body, linkApi, userId) => {
    if (body.name === null || body.name.length === 0) return [false, badInput(res, 'Name Tidak boleh kosong', body.name, linkApi, userId)]
  }
}
