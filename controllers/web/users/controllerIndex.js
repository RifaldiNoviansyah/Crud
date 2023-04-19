// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetAllUsers } = require('@query/users/findAll')

module.exports = {
  index: async (req, res) => {
    const userId = req.id
    const linkApi = '/api/web/users -index-'
    try {
      const userDatas = await queryGetAllUsers(linkApi, userId, res)
      if (userDatas.length > 0) {
        const result = userDatas.map((userData) => ({
          id: userData.id,
          name: userData.name,
          username: userData.username,
          address: userData.address,
          delStatus: userData.del_status
        }))
        return success(res, 'Menampilkan Semua Data User Berhasil',result, linkApi, userId)
      } else {
        return success(res, 'Belum Ada Data User', '0', linkApi, userId, 0)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
